// src/App.js
// import React, { useState, useEffect } from 'react';
// import TaskList from './components/TaskList';
// import TaskForm from './components/TaskForm';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     setTasks(storedTasks);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//   };

//   const editTask = (taskId, updatedTask) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === taskId ? { ...task, ...updatedTask } : task
//       )
//     );
//   };

//   const deleteTask = (taskId) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   return (
//     <div className="App">
//       <header>
//         <h1>Advanced TODO App</h1>
//       </header>
//       <main>
//         <TaskList
//           tasks={tasks}
//           editTask={editTask}
//           deleteTask={deleteTask}
//         />
//         <TaskForm addTask={addTask} />
//       </main>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTask(taskToEdit);
  };

  const saveEditedTask = (taskId, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
    setEditingTask(null);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>TODO App</h1>
      <TaskForm addTask={addTask} editTask={saveEditedTask} editingTask={editingTask} />
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
