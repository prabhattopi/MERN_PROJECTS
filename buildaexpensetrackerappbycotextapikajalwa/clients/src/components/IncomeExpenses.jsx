import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
    const {transactions} =useContext(GlobalContext)
    const amount=transactions.map(e=>e.amount)
    const income=amount
    .filter(e=>e>0)
    .reduce((sum,e)=>sum+=e,0)

    const expense=amount
    .filter(e=>e<0)
    .reduce((sum,e)=>sum+=e,0)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${Math.abs(income).toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${Math.abs(expense).toFixed(2)}</p>
      </div>
    </div>
  );
};
