const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors')
require('dotenv').config()
var ObjectId = require('mongodb').ObjectID;

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.snmo5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
        await client.connect();
        const database = client.db('asteriskPackages');
        const packagesCollection = database.collection('packages');
        const orderDatabase = client.db('asteriskOrders');
        const ordersCollection = orderDatabase.collection('orders');

        // GET Packages API
        app.get('/packages', async (req, res) => {
            const cursor = packagesCollection.find({});
            const packages = await cursor.toArray();
            res.send(packages);
        })
        // GET Orders API
        app.get('/orders', async (req, res) => {
            const cursor = ordersCollection.find({});
            const orders = await cursor.toArray();
            res.send(orders);
        })

        // Update orders API
        app.put('/orders/:id', async (req, res) => {
            const id = req.params.id;
            const updateOrder = req.body;
            const query = { _id: ObjectId(id) }
            const updatedOrder = {
                $set: {
                    status: updateOrder.status
                }
            }
            const result = await ordersCollection.updateOne(query, updatedOrder);
            res.json(result)
        })

        // Delete Item from Orders API
        app.delete('/orders/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await ordersCollection.deleteOne(query);
            res.json(result)
        })
        // Delete package from packages API
        app.delete('/packages/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await packagesCollection.deleteOne(query);
            res.json(result)
        })

        // POST packages API
        app.post('/packages', async (req, res) => {
            const newPackage = req.body;
            const result = await packagesCollection.insertOne(newPackage);

            console.log('Hiting the post', req.body);

            res.json(result)
        })
        // POST order API
        app.post('/orders', async (req, res) => {
            const newOrder = req.body;
            const result = await ordersCollection.insertOne(newOrder);

            console.log('Hiting the post', req.body);

            res.json(result)
        })

        // Dynamic Api
        app.get('/packages/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await packagesCollection.findOne(query);

            res.send(result);
        })

    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir)


app.get('/', (req, res) => {
    res.send('Asterisk Travel Agency Server Running')
})

app.listen(port, () => {
    console.log('Running server on port', port)
})