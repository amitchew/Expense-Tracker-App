import logo from "./logo.svg";
import "./App.css";
import ExpenseItems from "./components/ExpenseItem.js";
import expenses from "./expenses";
import './components/Expenses.css'
import Card from "./components/Card";
function App() {

  return (
    <Card className="expenses">
      <ExpenseItems
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItems
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
    </Card>
  );
}

export default App;
