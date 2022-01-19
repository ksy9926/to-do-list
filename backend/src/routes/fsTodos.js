import express from 'express';
import fs from 'fs';
import { getFormatDate } from '../utils/date.js';

const router = express.Router();

const todosBuffer = fs.readFileSync('./data/todos.json');
const todosJSON = todosBuffer.toString();
const todos = JSON.parse(todosJSON);

// Find All
router.get('/', (req, res) => {
  if (!todos['todos'].length) return res.status(404).send({ err: 'Todo not found' });
  res.send(todos);
});

// Create new todo document
router.post('/', (req, res) => {
  const { content } = req.body;
  const len = todos.todos.length;

  const todoid = len === 0 ? 1 : todos.todos[len - 1].todoid + 1;
  const newTodo = {
    todoid: todoid,
    content: content,
    completed: false,
    completedAt: '',
    description: '',
    createdAt: getFormatDate(),
    important: false,
  };

  todos.todos.push(newTodo);

  const postJSON = JSON.stringify(todos);
  fs.writeFileSync('./data/todos.json', postJSON);
  res.send(newTodo);
});

// Update by todoid
router.put('/:todoid', (req, res) => {
  const newTodos = { ...todos };
  const todoid = req.params.todoid;
  const index = newTodos.todos.findIndex((item) => item.todoid === parseInt(todoid));
  newTodos.todos[index] = req.body;

  const putJSON = JSON.stringify(newTodos);

  fs.writeFileSync('./data/todos.json', putJSON);
  res.send(req.body);
});

// Delete by todoid
router.delete('/:todoid', (req, res) => {
  const newTodos = { ...todos };
  const todoid = req.params.todoid;
  const index = newTodos.todos.findIndex((item) => item.todoid === parseInt(todoid));

  newTodos.todos.splice(index, 1);

  const deleteJSON = JSON.stringify(newTodos);

  fs.writeFileSync('./data/todos.json', deleteJSON);
  res.sendStatus(200);
});

export default router;
