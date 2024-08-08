import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import styles from "./App.module.css";
import { List } from "./components/List";


function App() {
  return (
    <div>
      <Header />
      <div className={styles.newTask}>
        <NewTask />
      </div>
      <div className={styles.list}>
        <List />
      </div>
    </div>
  )
}

export default App
