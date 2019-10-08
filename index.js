const express = require('express');
const db = require('./data/db-config');

const server = express();
const port = 5000;
server.use(express.json());

server.get('/', (req,res) => {
  db('cars')
    .then(cars => res.status(200).json(cars));
})

server.listen(port, () => {
  console.log("Server is up!");
})