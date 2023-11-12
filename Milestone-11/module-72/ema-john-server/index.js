const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json()); // Middleware to parse JSON request body
require('dotenv').config()
const product = require('./products.json');




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
        const shopCollection = client.db('ema-jhon').collection('shop');
        app.get('/products', async (req, res) => {
            console.log(req.query)
            const page = parseInt(req.query.page) || 0;
            const limit = parseInt(req.query.limit) || 10;
            const skip = page * limit;
            const products = await shopCollection.find().skip(skip).limit(limit).toArray();
            res.send(products)
        })

        app.post('/productByIds', async (req, res) => {
            const ids = req.body;
            // console.log(ids)
            const objectIDS = ids.map(id => new ObjectId(id));
            const query = { _id: { $in: objectIDS } };

            const result = await shopCollection.find(query).toArray();
            res.send(result)
        })

        app.get('/totalproducts', async (req, res) => {
            const totalProducts = await shopCollection.countDocuments();
            res.send({ totalProduct: totalProducts })
        })

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Ema John is running')
})
app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})