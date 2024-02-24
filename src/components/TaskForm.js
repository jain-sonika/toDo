// src/components/TaskForm.js
// import React, { useState } from 'react';

// const TaskForm = ({ addTask }) => {
//   const [newTask, setNewTask] = useState('');

//   const handleAddTask = () => {
//     if (newTask.trim() !== '') {
//       const task = {
//         id: Date.now(),
//         text: newTask,
//         completed: false,
//       };
//       addTask(task);
//       setNewTask('');
//     }
//   };

//   return (
//     <div className="task-form">
//       <input
//         type="text"
//         placeholder="Enter a new task"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//       />
//       <button onClick={handleAddTask}>Add Task</button>
//     </div>
//   );
// };

// export default TaskForm;

// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask, editTask, editingTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      if (editingTask) {
        editTask(editingTask.id, text);
      } else {
        addTask(text);
      }
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button type="submit">{editingTask ? 'Edit Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;


