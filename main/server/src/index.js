import cors from 'cors';
import express from 'express';
import { nanoid } from 'nanoid';

const app = express();
const port = process.env.PORT || 5174;

const tasks = [
  { id: nanoid(), title: 'Set up the workspace', status: 'done' },
  { id: nanoid(), title: 'Wire up the API routes', status: 'in-progress' },
  { id: nanoid(), title: 'Connect the React UI', status: 'pending' }
];

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'API is healthy',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const { title } = req.body || {};
  if (!title || !title.trim()) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTask = { id: nanoid(), title: title.trim(), status: 'pending' };
  tasks.push(newTask);
  return res.status(201).json(newTask);
});

app.patch('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body || {};
  const validStatuses = ['pending', 'in-progress', 'done'];

  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  const task = tasks.find((item) => item.id === id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  task.status = status;
  return res.json(task);
});

app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`);
});
