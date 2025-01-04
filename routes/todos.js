const express = require('express');
const router = express.Router();

let todos = [
    { id: 1, title: 'Learn Node.js', completed: false },
    { id: 2, title: 'Build an API', completed: true },
];

router.get('/', (req, res) => {
    res.json(todos);
});

router.post('/', (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });
    const newTodo = { id: Date.now(), title, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    const todo = todos.find((t) => t.id == id);

    if (!todo) return res.status(404).json({ error: 'Todo not found' });

    if (title) todo.title = title;
    if (typeof completed === 'boolean') todo.completed = completed;

    res.json(todo);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex((t) => t.id == id);

    if (index === -1) return res.status(404).json({ error: 'Todo not found' });

    const deleted = todos.splice(index, 1);
    res.json(deleted[0]);
});

module.exports = router;
