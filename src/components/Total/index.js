import React from "react";
import "../Total/style.scss";

const Total = ({ totalExpense }) => {
  let amount = totalExpense.map((item) => item.price);
  let total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <div className="total-block">
        <h1 className="total-title">Total: {total} PLN</h1>
      </div>
    </>
  );
};

export default Total;
