// src/components/TaskItem.js
import React, { useState } from 'react';

const TaskItem = ({ task, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, { text: editedText });
    }
    setIsEditing(!isEditing);
  };

  const handleToggleCompletion = () => {
    editTask(task.id, { completed: !task.completed });
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleCompletion}
        />
        <div className="text">
          {isEditing ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              onBlur={handleEdit}
              autoFocus
            />
          ) : (
            <span>{task.text}</span>
          )}
        </div>
      </div>
      <div className="actions">
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
