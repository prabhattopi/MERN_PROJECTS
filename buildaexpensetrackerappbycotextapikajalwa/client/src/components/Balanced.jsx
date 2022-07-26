import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {numberWithCommas} from "../utils/format";
export const Balanced = () => {
    const {transactions} =useContext(GlobalContext)
 
    const amount=transactions.map(e=>e.amount)
    const Total=amount.reduce((sum,e)=>{
      return sum=sum+e
    },0)
    const sign=Total<0?"-":"+";
  return (
    <>
        <h4>
            Your Balance
        </h4>
        <h1>
           {sign} ${numberWithCommas((Math.abs(Total)).toFixed(2))}
        </h1>
    </>
  )
}
