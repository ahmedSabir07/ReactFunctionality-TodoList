import React, { useState } from 'react';

export default function Header({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = () => {
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="Header">
      <input
        className='inputHead'
        type="text"
        placeholder="Enter your TO-DO.."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className='addbtn' onClick={handleChange}>Add</button>
    </div>
  );
}
