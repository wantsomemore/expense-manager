import React, { useState } from "react";
import Header from "../src/components/Header";
import Form from "../src/components/Form";
import Total from "../src/components/Total";
import "./global.scss";
import ExpensesList from "./components/ExpensesList.js";
const App = () => {

  const [totalExpense, setTotalExpense] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  
  let amount = totalExpense.map(item => item.price);
  let total = amount.reduce((acc,item) => acc += item ,0).toFixed(2);

  return (
    <>
      <Header />
      <Total total={total} />
      <Form
        expenseList={expenseList}
        setExpenseList={setExpenseList}
        totalExpense={totalExpense}
        setTotalExpense={setTotalExpense}
      />
      <ExpensesList expenseList={expenseList} setExpenseList={setExpenseList} />
    </>
  );
};

export default App;
