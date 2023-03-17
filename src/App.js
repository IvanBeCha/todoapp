import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  useEffect(() => {
    axios.get('/tasks').then((response) => {
      setTasks(response.data);
    });
  }, []);

  const handleNewTaskChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    axios.post('/tasks', newTask).then((response) => {
      setTasks((prevTasks) => [...prevTasks, response.data]);
      setNewTask({ title: '', description: '' });
    });
  };

  const handleTaskComplete = (task) => {
    axios.put(`/tasks/${task._id}`, { ...task, completed: true }).then((response) => {
      const index = tasks.findIndex((t) => t._id === task._id);
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1, response.data);
      setTasks(updatedTasks);
    });
  };

  const handleTaskDelete = (task) => {
    axios.delete(`/tasks/${task._id}`).then(() => {
      setTasks((prevTasks) => prevTasks.filter((t) => t._id !== task._id));
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleNewTaskSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={newTask.title} onChange={handleNewTaskChange} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" name="description" value={newTask.description} onChange={handleNewTaskChange} />
        </label>
        <br />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <input type="checkbox" checked={task.completed} onChange={() => handleTaskComplete(task)} />
            {task.title} - {task.description}{' '}
            <button onClick={() => handleTaskDelete(task)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;