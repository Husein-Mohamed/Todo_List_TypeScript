'use client'
import { clear } from 'console';
import React, { useState } from 'react';

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<Item[]>([
    { id: 1, text: 'learn typescript', completed: false },
    { id: 2, text: 'learn react', completed: false },
  ]);
  const [input, setInput] = useState<string>('');

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleClick = () => {
    const newTodo: Item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo, ]);
    setInput(input)
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <div className="w-64 p-4 bg-white shadow-md rounded border border-gray-300">
        <div className="flex items-center">
          <input
            type="text"
            className="w-full px-2 py-1 mb-2 border border-gray-300 focus:outline-none"
            placeholder="Enter text"
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <button
            onClick={handleClick}
            className="ml-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="p-2 bg-white shadow-sm rounded border border-gray-300 flex items-center justify-between"
            >
              <span
                onClick={() => handleToggle(todo.id)}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                className="flex-grow cursor-pointer"
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-red-500 focus:outline-none"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;