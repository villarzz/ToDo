import styles from "./NewTask.module.css";
import { PlusCircle } from "phosphor-react";

export function NewTask() {
  return (
    <div className={styles.newTask}>
      <input type="text" placeholder="Adicionar uma nova tarefa" />
      <button>Criar <PlusCircle size={16} /></button>
    </div>
  );
}
