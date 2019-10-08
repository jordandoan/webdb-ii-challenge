const express = require('express');
const db = require('./data/db-config');

const server = express();
const port = 5000;
server.use(express.json());

server.get('/', (req,res) => {
  db('cars')
    .then(cars => res.status(200).json(cars));
})
server.post('/', (req,res) => {
  const car = req.body;
  db('cars').insert(car)
    .then(id => res.status(201).json({id:id[0], ...car}));
})
server.listen(port, () => {
  console.log("Server is up!");
})