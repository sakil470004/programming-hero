const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
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
// for jwt verify
const verifyJWT = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).send({ error: true, message: 'unauthorized access' });
    }
    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: true, message: 'unauthorized access' })
        }
        req.decoded = decoded;
        next();
    })
}

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        console.log('mongo connected')
        const serviceCollection = client.db("carDoctor").collection('services');
        const appointmentCollection = client.db("carDoctor").collection('appointment');
           // jwt
           app.post('/jwt', (req, res) => {
            const user = req.body;
            console.log(user);
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
            console.log(token);
            res.send({token});
        })
        // endJWD

        app.get('/services', async (req, res) => {
            const cursor = serviceCollection.find();
            const services = await cursor.toArray();
            res.send(services)
        })

        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const options = {
                // Include only the `title` and `imdb` fields in the returned document
                projection: { title: 1, price: 1, description: 1, img: 1, },
            };
            const service = await serviceCollection.findOne(query, options);
            res.send(service)
        })
        //note: appointment
        app.post('/services', async (req, res) => {
            const data = req.body;
            const result = await appointmentCollection.insertOne(data);
            res.send(result);
        })

        app.get('/appointments', verifyJWT, async (req, res) => {
            const decoded = req.decoded;
            console.log('came back after verify', decoded)

            if (decoded.email !== req.query.email) {
                return res.status(403).send({ error: 1, message: 'forbidden access' })
            }
            let query = {};
            console.log(req.query?.email)
            if (req.query?.email) {
                query = { email: req.query.email }
            }
            const result = await appointmentCollection.find(query).toArray();
            res.send(result);
        })

        app.patch('/appointments/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const updatedBooking = req.body;
            console.log(updatedBooking);
            const updateDoc = {
                $set: {
                    status: updatedBooking.status
                },
            };
            const result = await appointmentCollection.updateOne(filter, updateDoc);
            res.send(result);
        })

        app.delete('/appointments/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await appointmentCollection.deleteOne(query);
            res.send(result);
        })

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Car-doctor server is running')
})
app.listen(port, () => {
    console.log(`Car doctor listening on port ${port}`)
})