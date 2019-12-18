const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var fakeTodos = 
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
  res.status(200).send()
});

app.get('/api/TodoItems', (req, res) => {
  res.status(200).send(fakeTodos);
});

app.post('/api/TodoItems', (req, res) => {
  fakeTodos.push(req.body);
  res.status(201).send(req.body);
});

app.get('/api/TodoItems/:id', (req, res) => {
  if(fakeTodos[req.params.id]) {
    res.status(200).send(fakeTodos[req.params.id]);
  } else {
    res.status(400).send('This todo doesn\'t exist.')
  }
});

app.delete('/api/TodoItems/:ide', (req, res) => {
  if(fakeTodos[req.params.ide]) {
    let newFakeTodos = fakeTodos.filter(todo => todo.todoItemId !== [req.params.ide][0]);
    fakeTodos = newFakeTodos;
    res.status(200).send(fakeTodos[req.params.ide]);
  } else {
    res.status(400).send('This todo doesn\'t exist.')
  }
});

module.exports = app;
