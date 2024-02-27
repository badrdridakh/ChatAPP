const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectToMongoDB = require("./db/connectToMongDB");

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());

app.get('/', (req, res) => { res.send('<h1>Welcome to your chatapp</h1>') })

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});