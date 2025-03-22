
import { useState } from "react";

function ToDoItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  function handleEdit() {
    editTask(task.id, newText);
    setIsEditing(false);
  }

  return (
    <li className={`task ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit} className="edit-btn">Save</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
          <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
          <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
