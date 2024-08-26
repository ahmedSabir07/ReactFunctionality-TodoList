import React from 'react';
import TodoItem from './TodoItem';

function ToDoList({ tasks = [], deleteTask, toggleComplete, editTask }) {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
          />
        ))
      ) : (
        <p className='noTaskavailabe'>No tasks available</p>
      )}
    </div>
  );
}

export default ToDoList;
