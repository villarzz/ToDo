import { Task } from "./Task";
import styles from "./NewTask.module.css";
import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import Clipboard from "../assets/Clipboard.svg";

export function NewTask() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");
  const [taskChecked, setTaskChecked] = useState(0);

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    if (newTask !== "") {
      setTasks(prevTasks => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
    setTaskChecked(taskChecked => taskChecked - 1);
  }

  function checkTask() {
    setTaskChecked(taskChecked => taskChecked + 1);
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
        <button className={styles.button} type="submit">
          Criar <PlusCircle size={16} />
        </button>
      </form>
      <div className={styles.counterWrapper}>
        <p className={styles.tasksCreated}>
          Tarefas criadas
          <span className={styles.tasksCounter}>{tasks.length}</span>
        </p>
        <p className={styles.tasksCompleted}>
          Concluidas
          <span className={styles.tasksCounter}>{taskChecked}</span>
        </p>
      </div>
      {tasks.length === 0 ? (
        <>
          <div className={styles.listWrapper}>
            <div className={styles.emptyImage}>
              <img src={Clipboard} />
            </div>
            <strong className={styles.emptyText}>
              Você ainda não tem tarefas cadastradas
            </strong>
            <p className={styles.emptyText}>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </>
      ) : (
        <div className={styles.listWrapper}>
          {tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              onDeleteTask={deleteTask}
              onCheckTask={checkTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}
