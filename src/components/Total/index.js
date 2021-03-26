import React from "react";
import "../Total/style.scss";


const Total = ({ total }) => {

  return (
    <>
      <h1 className="total-title">Total: {total} PLN</h1>
    </>
  );
};

export default Total;
