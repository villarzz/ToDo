import { useState } from "react";
import styles from "./Task.module.css";
import { Circle, CheckCircle, Trash } from "phosphor-react";

export function Task() {
  const [taskChecked, setTaskChecked] = useState(false);

  const handleCheckTask = () => {
    setTaskChecked(taskChecked => !taskChecked);
  }

  return (
    <div className={styles.taskWrapper}>
      <button className={styles.checkbtn} onClick={handleCheckTask}>
       {taskChecked ? <CheckCircle color="#5e60ce" weight="fill" className={styles.check} size={24} /> : <Circle size={24} />}
      </button>
      <p className={taskChecked ? styles.paragraph : ''}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta nobis
        minima voluptates asperiores, doloremque delectus?
      </p>
      <button className={styles.trashbtn}>
        <Trash size={20} />
      </button>
    </div>
  );
}
