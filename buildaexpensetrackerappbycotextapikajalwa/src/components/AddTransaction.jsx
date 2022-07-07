import React, { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
export const AddTransaction = () => {
    const [text,setText]=useState("")
    const [amount,setAmount]=useState(0)
    const { AddTrans,transactions}=useContext(GlobalContext)
    const HandleSumit=(e)=>{
        e.preventDefault()
        const newTrans={
            id:Math.floor(Math.random() * 10000000000000000000000000000000000000),
            text:text,
            amount:Number(amount)
        }
   AddTrans(newTrans)
   setAmount(0)
   setText("")
    }
    
  return (
    <>
    <h3>Add new transaction</h3>
      <form onSubmit={HandleSumit} >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input value={text} onChange={(e)=>setText(e.target.value)} type="text" />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="number"  />
        </div>
        <button className="btn" type="submit">Add transaction</button>
      </form>
    
    </>
  )
}
