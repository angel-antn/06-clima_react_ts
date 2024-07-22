import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./App.module.css";
import { Form } from "./components/form/Form";

function App() {
  return (
    <>
      <div className={styles["card"]}>
        <h1 className={styles["title"]}>Buscador de clima</h1>
        <div className={styles.container}>
          <div className={styles["form"]}>
            <Form />
          </div>
          <div className={styles["result"]}>2</div>
        </div>
      </div>{" "}
      <ToastContainer />
    </>
  );
}

export default App;
