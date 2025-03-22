import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, addTask, toggleComplete, deleteTask, editTask }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() !== "") {
      addTask(text);
      setText("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task..."
        />
        <button type="submit">Add</button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
