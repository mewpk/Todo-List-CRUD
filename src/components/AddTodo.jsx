import React, { useState, useEffect, useRef } from "react";

function AddTodo({ onSubmit, edit, display }) {
  const [input, setInput] = useState(edit ? edit.value : "");

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

    setInput("");

    if (edit) {
      display();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        edit
          ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          : "mb-4"
      } flex justify-center w-full`}
    >
      <div className={`${edit ? "bg-white p-4 shadow-lg rounded-lg" : ""}`}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          autoFocus // This prop automatically focuses the input element when rendered
          name="text"
          className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
