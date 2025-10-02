import styles from "./App.module.css";
import ExpandableTable from "./components/ExpandableTable";

function App() {
  return (
    <div className={styles.appRoot}>
      <ExpandableTable />
    </div>
  );
}

export default App;
