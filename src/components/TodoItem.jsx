// TodoItem.js
import React, { useState } from "react";
import AddTodo from "./AddTodo";

function TodoItem({ todos, removeTodo, updateTodo , display}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <AddTodo edit={edit} onSubmit={submitUpdate} display={display} />;
  }

  return todos.map((todo, index) => (
    <div
      key={index}
      className="todo-row flex items-center justify-between mt-2 p-2 shadow-lg"
    >
      <div key={todo.id}>{todo.text}</div>
      <div className="icons flex">
        <button
          onClick={() => removeTodo(todo.id)}
          className="update-btn bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mx-1 rounded"
        >
          Delete
        </button>
        <button
          onClick={() => {
            setEdit({ id: todo.id, value: todo.text });
            display()
          }}
          className="delete-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mx-1 rounded"
        >
          Edit
        </button>
      </div>
    </div>
  ));
}

export default TodoItem;
