import React, { useState } from 'react';

function ToDoItem({ editTask, toggleComplete, deleteTask, task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={() => setIsEditing(false)} // Automatically save on blur
        />
      ) : (
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
      )}
      <button onClick={() => deleteTask(task.id)} className="icon-btn delete-btn">
        <i className="fas fa-trash"></i>
      </button>
      <button onClick={handleEdit} className="icon-btn edit-btn">
        {isEditing ? <i className="fas fa-save"></i>  : <i className="fas fa-edit"></i>}
      </button>
    </div>
  );
}

export default ToDoItem;
