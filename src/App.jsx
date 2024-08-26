import React, { useState } from 'react';
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  // State to manage tasks, filter criteria, and dark mode
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isDark, setIsDark] = useState(false);


  // Add a new task to the list
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    toast.success('Task added!');
  };

  // Delete a task by its ID
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.error('Task Deleted!');
  };

  // Toggle the completion status of a task
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    toast.info('Task status updated');
  };

  // Edit the text of an existing task
  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
    toast.info('Task updated!');
  };

  // Filter tasks based on the selected filter criteria
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

   // Toggle between light and dark mode
  const toggleDark = () => {
    setIsDark((prevMode) => !prevMode);
  };

    return (
  <>
    <h1 className='head'>TODO LIST</h1>

    <div className={`app ${isDark ? 'dark-mode' : ''}`}>

      {/* Dark mode toggle button */}
      <div className='darkMode'>
        <button onClick={toggleDark} aria-label="Toggle Dark Mode">
          <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </div>

      {/* Header component for adding tasks */}
      <Header addTask={addTask} />

      {/* Filter buttons for task list */}
      <div className='filter-buttons'>
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      {/* ToDoList component for displaying tasks */}
      <ToDoList
        editTask={editTask}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        tasks={filteredTasks}
      />
    </div>
    <ToastContainer />
  </>
);
}


export default App;
