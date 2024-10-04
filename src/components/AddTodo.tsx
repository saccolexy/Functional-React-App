import React, { useState } from 'react';

interface AddTodoProps {
  onAdd: (task: string) => void; // Function to handle adding a task
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [task, setTask] = useState(''); // Local state to hold the new task input

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    if (task.trim()) { // Check if task is not empty
      onAdd(task); // Call the onAdd function passed from the App component
      setTask(''); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add a new task" 
        value={task} // Bind input value to local state
        onChange={(e) => setTask(e.target.value)} // Update local state on input change
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
