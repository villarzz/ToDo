import { useState } from "react";
import styles from "./Task.module.css";
import { Circle, CheckCircle, Trash } from "phosphor-react";

export function Task(props: any) {
  const [taskChecked, setTaskChecked] = useState(false);

  const handleCheckTask = () => {
    setTaskChecked(taskChecked => !taskChecked);
    props.onCheckTask(props.task);
  };

  function handleDeleteTask() {
    props.onDeleteTask(props.task);
  }

  return (
    <div>
      <div className={styles.taskWrapper}>
        <div className={styles.taskContent}>
            <button className={styles.checkbtn} onClick={handleCheckTask}>
            {taskChecked ? (
                <CheckCircle
                color="#5e60ce"
                weight="fill"
                className={styles.check}
                size={24}
                />
            ) : (
                <Circle weight="bold" size={24} />
            )}
            </button>
            <p className={taskChecked ? styles.paragraphCkeched : styles.paragraph}>
            {props.task}
            </p>
        </div>
        <button className={styles.trashbtn} onClick={handleDeleteTask}>
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
}
