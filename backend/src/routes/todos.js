import express from 'express';
import { Todo } from '../models/todo.js';

const router = express.Router();

// Find All
router.get('/', (req, res) => {
  Todo.findAll()
    .then((todos) => {
      if (!todos.length) return res.status(404).send({ err: 'Todo not found' });
      res.send({ todos: todos });
    })
    .catch((err) => res.status(500).send(err));
});

// Find One by todoid
router.get('/todoid/:todoid', (req, res) => {
  console.log('req.params: ', req.params);
  Todo.findOneByTodoid(req.params.todoid)
    .then((todo) => {
      if (!todo) return res.status(404).send({ err: 'Todo not found' });
      res.send(`findOne successfully: ${todo}`);
    })
    .catch((err) => res.status(500).send(err));
});

// Create new todo document
router.post('/', (req, res) => {
  console.log('req.body: ', req.body);
  Todo.create(req.body)
    .then((todo) => res.send(todo))
    .catch((err) => res.status(500).send(err));
});

// Update by todoid
router.put('/todoid/:todoid', (req, res) => {
  Todo.updateByTodoid(req.params.todoid, req.body)
    .then((todo) => res.send(todo))
    .catch((err) => res.status(500).send(err));
});

// Delete by todoid
router.delete('/todoid/:todoid', (req, res) => {
  Todo.deleteByTodoid(req.params.todoid)
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err));
});

export default router;
