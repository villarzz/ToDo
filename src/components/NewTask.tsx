import styles from "./NewTask.module.css";
import { PlusCircle } from "phosphor-react";
import Clipboard from "../assets/Clipboard.svg";
import { FormEvent, useState } from "react";

export function NewTask() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    if (newTask !== "") {
      setTasks(prevTasks => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  return (
    <div>
      <form onSubmit={handleCreateTask} className={styles.newTask}>
        <input
          type="text"
          placeholder="Adicionar uma nova tarefa"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button type="submit">
          Criar <PlusCircle size={16} />
        </button>
      </form>
      <div className={styles.counterWrapper}>
        <p className={styles.tasksCreated}>
          Tarefas criadas
          <span className={styles.tasksCounter}>0</span>
        </p>
        <p className={styles.tasksCompleted}>
          Concluidas
          <span className={styles.tasksCounter}>0</span>
        </p>
      </div>
      {/* <div className={styles.listWrapper}>
        <div className={styles.emptyImage}>
          <img src={Clipboard} />
        </div>
        <strong className={styles.emptyText}>
          Você ainda não tem tarefas cadastradas
        </strong>
        <p className={styles.emptyText}>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div> */}
      <div className={styles.listWrapper}>
        
      </div>
    </div>
  );
}
