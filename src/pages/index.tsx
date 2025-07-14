import ToDoList from "../components/ToDoList";

export default function TodoList() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Mi Lista de Tareas</h1>
      <ToDoList />
    </main>
  );
}
