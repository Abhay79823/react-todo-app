import { useState } from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import "./Components/styles.css"; 

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  }

  function toggleComplete(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function editTask(id, newText) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  }

  return (
    <div className="container">
      <Header />
      <ToDoList
        tasks={tasks}
        addTask={addTask}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
