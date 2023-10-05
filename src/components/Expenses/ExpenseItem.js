import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItems(props) {
  const [amount,setAmount]=useState(props.amount)

  const increaseAmount=()=>{
    setAmount(amount+1)

  }

  const decreaseAmount=()=>{
    setAmount(amount-1)

  }


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h1>{props.title}</h1>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={increaseAmount}>+</button>
      <button onClick={decreaseAmount}>-</button>
  
    </Card>
  );
}
export default ExpenseItems;
