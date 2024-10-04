import React, { useState } from 'react';

interface TodoItemProps {
  id: number; // Unique identifier for the task
  task: string; // Task description
  completed: boolean; // Completion status
  onDelete: (id: number) => void; // Function to delete task
  onUpdate: (id: number, newTask: string) => void; // Function to update task
}

const TodoItem: React.FC<TodoItemProps> = ({ id, task, completed, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false); // State to toggle between editing and viewing
  const [newTask, setNewTask] = useState(task); // Local state to hold the updated task input

  const handleUpdate = () => {
    onUpdate(id, newTask); // Call update function with the new task
    setIsEditing(false); // Exit editing mode
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={newTask} // Bind input value to local state
            onChange={(e) => setNewTask(e.target.value)} // Update local state on input change
          />
          <button onClick={handleUpdate}>Save</button> {/* Save changes */}
        </div>
      ) : (
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {task}
        </span>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button> {/* Toggle editing mode */}
      <button onClick={() => onDelete(id)}>Delete</button> {/* Call delete function */}
    </li>
  );
};

export default TodoItem;
