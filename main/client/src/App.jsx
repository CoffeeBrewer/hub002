import { useEffect, useMemo, useState } from 'react';
import './App.css';

const STATUS_LABELS = {
  pending: 'Pending',
  'in-progress': 'In Progress',
  done: 'Done'
};

const STATUS_COLORS = {
  pending: '#f59e0b',
  'in-progress': '#3b82f6',
  done: '#22c55e'
};

function StatusBadge({ status }) {
  return (
    <span className="badge" style={{ backgroundColor: `${STATUS_COLORS[status]}20`, color: STATUS_COLORS[status] }}>
      ● {STATUS_LABELS[status]}
    </span>
  );
}

function TaskCard({ task, onUpdate }) {
  return (
    <article className="card">
      <header className="card__header">
        <div>
          <p className="label">Task</p>
          <h3 className="title">{task.title}</h3>
        </div>
        <StatusBadge status={task.status} />
      </header>
      <footer className="card__footer">
        <div className="chip">ID: {task.id.slice(0, 8)}</div>
        <div className="actions">
          {['pending', 'in-progress', 'done'].map((status) => (
            <button
              key={status}
              className={task.status === status ? 'active' : ''}
              onClick={() => onUpdate(task.id, status)}
            >
              {STATUS_LABELS[status]}
            </button>
          ))}
        </div>
      </footer>
    </article>
  );
}

function App() {
  const [health, setHealth] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchInitial = async () => {
      try {
        const [healthRes, tasksRes] = await Promise.all([
          fetch('/api/health'),
          fetch('/api/tasks')
        ]);

        const healthJson = await healthRes.json();
        const tasksJson = await tasksRes.json();

        setHealth(healthJson);
        setTasks(tasksJson);
        setLoading(false);
      } catch (err) {
        setError('Unable to load data. Ensure the API server is running.');
        setLoading(false);
      }
    };

    fetchInitial();
  }, []);

  const completedCount = useMemo(() => tasks.filter((task) => task.status === 'done').length, [tasks]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!form.title.trim()) {
      setError('Please add a task title.');
      return;
    }

    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: form.title })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to add task');
      }

      const newTask = await response.json();
      setTasks((prev) => [newTask, ...prev]);
      setForm({ title: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdate = async (id, status) => {
    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to update task');
      }

      const updated = await response.json();
      setTasks((prev) => prev.map((task) => (task.id === id ? updated : task)));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main>
      <p className="eyebrow">React + Express Full Stack</p>
      <h1>Task dashboard</h1>
      <p className="lead">
        A starter dashboard wired to an Express API. Add tasks, change statuses, and expand the UI however you like.
      </p>

      <section className="grid">
        <article className="panel">
          <header>
            <p className="label">API status</p>
            <h2>Health check</h2>
          </header>
          {health ? (
            <div className="health">
              <span className="dot" />
              <div>
                <p className="strong">{health.message}</p>
                <p className="muted">Last ping: {new Date(health.timestamp).toLocaleString()}</p>
              </div>
            </div>
          ) : (
            <p className="muted">Waiting for API response...</p>
          )}
        </article>

        <article className="panel stats">
          <header>
            <p className="label">Progress</p>
            <h2>Team snapshot</h2>
          </header>
          <div className="stats__row">
            <div>
              <p className="strong">{tasks.length}</p>
              <p className="muted">Tasks in queue</p>
            </div>
            <div>
              <p className="strong">{completedCount}</p>
              <p className="muted">Completed</p>
            </div>
          </div>
        </article>
      </section>

      <section className="panel">
        <header className="panel__header">
          <div>
            <p className="label">Tasks</p>
            <h2>Manage your backlog</h2>
          </div>
          <form className="inline-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Add a task..."
              value={form.title}
              onChange={(e) => setForm({ title: e.target.value })}
            />
            <button type="submit">Add</button>
          </form>
        </header>
        {error && <div className="error">{error}</div>}
        {loading ? (
          <p className="muted">Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <p className="muted">No tasks yet. Add one to get started.</p>
        ) : (
          <div className="list">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} onUpdate={handleUpdate} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
