"use client";
import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function ToDoList() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  // 🔁 Leer tareas de Firebase al cargar el componente
  useEffect(() => {
    async function fetchTasks() {
      try {
        console.log("Attempting to fetch tasks from Firebase...");
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const fetchedTasks = querySnapshot.docs.map((doc) => doc.data().task);
        setTasks(fetchedTasks);
        console.log("Successfully fetched tasks:", fetchedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        console.error("Error code:", error.code);
        console.error("Error message:", error.message);
      }
    }
    fetchTasks();
  }, []);

  // ➕ Añadir tarea nueva
  const addTask = async () => {
    if (input.trim() !== "") {
      try {
        console.log("Attempting to add task to Firebase...");
        await addDoc(collection(db, "tasks"), {
          task: input.trim(),
        });
        setTasks([...tasks, input.trim()]);
        setInput("");
        console.log("Successfully added task:", input.trim());
      } catch (error) {
        console.error("Error al añadir tarea:", error);
        console.error("Error code:", error.code);
        console.error("Error message:", error.message);
        alert(`Error adding task: ${error.message}`);
      }
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
