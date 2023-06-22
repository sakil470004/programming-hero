const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json());
const port = process.env.PORT || 5000;




const uri = "mongodb+srv://mynulsakil:JwpLqHtzb5QWYELB@cluster0.bpciahf.mongodb.net/?retryWrites=true&w=majority";

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
        const userCollection = client.db("userDB").collection('user');

        app.get('/users', async (req, res) => {
            const cursor = await userCollection.find();
            const users = await cursor.toArray();
            res.send(users)

        })
        app.get('/user/:id', async (req, res) => {
            const id = req.params.id;
            const user = await userCollection.findOne({ _id: new ObjectId(id) })
            res.send(user)
        })

        app.post('/user', async (req, res) => {
            const user = req.body;
            // console.log(user)
            const result = await userCollection.insertOne(user);
            res.send(result)
        })
        app.put('/user/:id', async (req, res) => {
            const id = req.params.id;
            const user = req.body
            const result = await userCollection.updateOne({ _id: new ObjectId(id) }, { $set: user })
            res.send(result)
        })
        app.delete('/user/:id', async (req, res) => {
            const id = req.params.id;
            const result = await userCollection.deleteOne({ _id: new ObjectId(id) })
            res.send(result)

        })

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.log);




app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})