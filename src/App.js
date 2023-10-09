import "./App.css";
import expenses from "./expenses";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const addExpenseHandler=expense=>{
    console.log(expense)
  }
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler}/>

      <Expenses items={expenses} />
    </>
  );
}

export default App;
