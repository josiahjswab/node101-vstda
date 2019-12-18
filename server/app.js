const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

const fakeTodos = 
[
    {
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
    },
    {
        todoItemId: 1,
        name: 'another item',
        priority: 2,
        completed: false
    },
    {
        todoItemId: 2,
        name: 'a done item',
        priority: 1,
        completed: true
    }
];

app.get('/', (req, res) => {
  res.status(200).send('ok')
})

app.get('/api/TodoItems', (req, res) => {
  res.status(200).send(fakeTodos);
})

app.get('/api/TodoItems/:id', (req, res) => {
  if(fakeTodos[req.params.id]) {
    res.status(200).send(fakeTodos[req.params.id]);
  } else {
    res.status(400).send('This todo doesn\'t exist.')
  }
})

module.exports = app;
