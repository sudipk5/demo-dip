const express = require("express");
const app = express();
const path = require("path");
const { MongoClient } = require("mongodb");

const PORT = 5050;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const MONGO_URL = "mongodb://admin:qwerty@demo-dip-mongodb-1:27017";
const client = new MongoClient(MONGO_URL);

// GET all users
app.get("/getUsers", async (req, res) => {
    await client.connect(MONGO_URL);
    console.log('Connected successfully to MongoDB');

    const db = client.db("apnacollege-db");
    const data = await db.collection('users').find({}).toArray();

    client.close();
    res.send(data);
});

// POST new user
app.post("/addUser", async (req, res) => {
    const userObj = req.body;
    console.log(req.body);
    await client.connect(MONGO_URL);
    console.log('Connected successfully to MongoDB');

    const db = client.db("apnacollege-db");
    const result = await db.collection('users').insertOne(userObj);
    console.log(result);
    console.log("Data inserted in DB");

    client.close();
    res.send("User added!");
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
