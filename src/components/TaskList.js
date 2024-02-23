//src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, editTask, deleteTask }) => {
  return (
    <section className="task-list">
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;




