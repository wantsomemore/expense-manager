import React, { useState } from "react";
import Header from "../src/components/Header";
import Form from "../src/components/Form";
import Total from "../src/components/Total";
import "./global.scss";
import ExpensesList from "./components/ExpensesList.js";
const App = () => {

  const [totalExpense, setTotalExpense] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  
  

  return (
    <>
      <Header />
      <Total totalExpense={totalExpense} />
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
