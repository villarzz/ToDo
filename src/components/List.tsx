import styles from "./List.module.css";
import Clipboard from "../assets/Clipboard.svg";

export function List() {
  return (
    <div>
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
      <div className={styles.listWrapper}>
        <div className={styles.emptyImage}>
            <img src={Clipboard}/>
        </div>
        <strong className={styles.emptyText}>Você ainda não tem tarefas cadastradas</strong>
        <p className={styles.emptyText}>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
