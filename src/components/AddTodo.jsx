import React, { useState, useEffect, useRef } from 'react';

function AddTodo({ onSubmit, edit  , display}) {
  const [input, setInput] = useState(edit ? edit.value : '');

//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: edit ? edit.id : Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');

    if(edit){
      display()
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form flex justify-center mb-4">
      <input
        autoFocus
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit} className="todo-button ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {edit ? 'Update' : 'Add'}
      </button>
    </form>
  );
}

export default AddTodo;
