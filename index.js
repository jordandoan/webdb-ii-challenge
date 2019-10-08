const express = require('express');
const db = require('./data/db-config');

const server = express();
const port = 5000;
server.use(express.json());

server.get('/api/cars', (req,res) => {
  db('cars')
    .then(cars => res.status(200).json(cars));
});

server.get('/api/cars/:id', (req,res) => {
  db('cars').where({id: req.params.id})
    .then(car => {
      if (car) {
        res.status(200).json(car)
      } else {
        res.status(400).json({message:"Car with specified ID not found"})
      }
    })
});

server.post('/api/cars', (req,res) => {
  const car = req.body;
  db('cars').insert(car)
    .then(id => res.status(201).json({id:id[0], ...car}));
});

server.get('/api/sales', (req,res) => {
  db('sales')
    .then(sales => res.status(200).json(sales));
});

server.post('/api/sales', (req,res) => {
  const sale = req.body;
  const date = new Date();
  db('cars').where({id: sale.vehicle_id})
    .then(car => {
      if (car) {
        db('sales').insert({...sale, sale_date: date})
        .then(id => res.status(201).json({id:id[0], ...sale, sale_date:date}))
      } else {
        res.status(400).json({message:"Could not find car with specified ID"});
      }
    });
});

server.put('/api/cars/:id', (req,res) => {
  const car = req.body;
  db('cars').where({id: req.params.id}).update(car)
    .then(records => {
      if (records) {
        res.status(201).json({id: id, ...car})
      } else {
        res.status(400).json({message: "bad request"})
      }
    })
});

server.delete('/api/cars/:id', (req,res) => {
  db('cars').where({id: req.params.id})
    .then(records => {
      if (records) {
        res.status(201).json({message:"Successfully deleted!"})
      } else {
        res.status(400).json({message: "bad request"})
      }
    })
});

server.listen(port, () => {
  console.log("Server is up!");
})