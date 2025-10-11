import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  // State for todos and input
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Handler for input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handler for adding todos
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: inputValue,
        completed: false,
      },
    ]);
    setInputValue('');
  };

  // Handler for toggling todo completion
  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Handler for deleting todos
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      
      {/* Todo Input Form */}
      <form onSubmit={handleAddTodo} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new todo"
          aria-label="New todo input"
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>

      {/* Todo List */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
              className="todo-checkbox"
              aria-label={`Mark ${todo.text} as ${todo.completed ? 'incomplete' : 'complete'}`}
            />
            <span className={todo.completed ? 'completed' : ''}>
              {todo.text}
            </span>
            <button
              className="delete-button"
              onClick={() => handleDeleteTodo(todo.id)}
              aria-label={`Delete ${todo.text}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;