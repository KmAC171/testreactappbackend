const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://rasiksafran:rasiksafranpwd@db1.l5huvca.mongodb.net/?appName=db1';


const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("connected to mongodb");
    }
    catch(error)
    {
        console.log("error connecting to mongodb", error);
    }
};
connect();

const server = app.listen(3001, '127.0.0.1', () => {
    console.log(`node server is listnening to ${server.address().port}`);
});

app.use('/api', router);