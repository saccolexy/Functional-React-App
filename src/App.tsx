import './App.css'; // Import the CSS styles

import React, { useState } from 'react'; // Import useState hook
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

// Define the type for a todo item
interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const App: React.FC = () => {
  // Use useState to manage the list of todos
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, task: "Learn React", completed: false },
    { id: 2, task: "Build a static CRUD app", completed: false },
    { id: 3, task: "Master TypeScript", completed: false },
  ]);

  // Function to add a new task
  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: todos.length + 1, // Simple ID generation
      task,
      completed: false,
    };
    setTodos([...todos, newTodo]); // Update the state with the new todo
  };

  // Function to delete a task by id
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id)); // Filter out the todo to be deleted
  };

  // Function to update a task
  const updateTodo = (id: number, newTask: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, task: newTask } : todo // Update the task if the id matches
    ));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTodo onAdd={addTodo} /> {/* Pass addTodo function to AddTodo component */}
      <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} /> {/* Pass delete and update functions */}
    </div>
  );
};

export default App;
