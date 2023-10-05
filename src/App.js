import "./App.css";
import expenses from "./expenses";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  return (
    <>
      <NewExpense />

      <Expenses items={expenses} />
    </>
  );
}

export default App;
