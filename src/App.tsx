import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import styles from "./App.module.css";


function App() {

  return (
    <div>
      <Header />
      <div className={styles.newTask}>
        <NewTask />
      </div>
    </div>
  )
}

export default App
