import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [display, setDisplay] = useState(true);

  const toggleDisplay = () => {
    setDisplay(!display);
  }

  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    }
    setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-center text-4xl mb-4">Todo List</h1>
      {
        display && <AddTodo  onSubmit={addTodo} display={toggleDisplay} />
      }
      <TodoItem display={toggleDisplay} todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
