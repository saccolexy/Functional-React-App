import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[]; // Array of todo items
  onDelete: (id: number) => void; // Function to handle task deletion
  onUpdate: (id: number, newTask: string) => void; // Function to handle task updates
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onUpdate }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          task={todo.task} 
          completed={todo.completed} 
          onDelete={onDelete} // Pass delete function
          onUpdate={onUpdate} // Pass update function
          id={todo.id} // Pass the todo id for updating and deleting
        />
      ))}
    </ul>
  );
};

export default TodoList;
