import styles from "./NewTask.module.css";
import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";

export function NewTask() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    if (newTask !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  return (
    <form className={styles.newTask} onSubmit={handleCreateTask}>
      <input
        type="text"
        placeholder="Adicionar uma nova tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
