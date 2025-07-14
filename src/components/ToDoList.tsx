"use client";
import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState(["Buy groceries", "Do laundry"]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  return (
    <div className="p-4">
      <input
        className="border p-2 mr-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={addTask} className="bg-blue-500 text-white px-3 py-2">
        Agregar
      </button>
      <ul className="mt-4">
        {tasks.map((task, i) => (
          <li key={i} className="border-b py-2">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
