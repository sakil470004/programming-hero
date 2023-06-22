const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_PASS}@cluster0.bpciahf.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        console.log('mongo connected')
        const coffeeCollection = client.db("CoffeeDB").collection('coffees');

        // finished see all coffee
        app.get('/coffees', async (req, res) => {
            const cursor = await coffeeCollection.find();
            const coffees = await cursor.toArray();
            res.send(coffees)
        })
        // get single coffee
        app.get('/coffee/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id)
            const coffee = await coffeeCollection.findOne({ _id: new ObjectId(id) });
            res.send(coffee)
        })
        

        // finished adding coffee
        app.post('/coffee', async (req, res) => {
            const coffee = req.body;
            const result = await coffeeCollection.insertOne(coffee);
            res.send(result);
        })
        // app.put('/coffee/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const coffee = req.body
        //     const result = await coffeeCollection.updateOne({ _id: new ObjectId(id) }, { $set: coffee })
        //     res.send(result)
        // })
        // finished update coffee
        app.put('/update/:id', async (req, res) => {
            const id = req.params.id;
            const coffee = req.body;
            const result = await coffeeCollection.updateOne({ _id: new ObjectId(id) }, {
                $set: coffee
            })
            res.send(result);
        })

        // finished delete coffe
        app.delete('/delete/:id', async (req, res) => {
            const id = req.params.id;
            const result = await coffeeCollection.deleteOne({ _id: new ObjectId(id) });
            res.send(result)
        })

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.log);



app.get('/', (req, res) => {
    res.send('Coffee store is running')
})

app.listen(port, () => {
    console.log(`Coffee store is running on port, ${port}`)
})
