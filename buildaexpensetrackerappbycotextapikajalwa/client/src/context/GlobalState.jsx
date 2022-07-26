import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"
import axios from "axios"
// let data=JSON.parse(localStorage.getItem("item"))||[]
const initialState = {
  transactions:[],
  error:null,
  loading:true
};

//Actions


//create Context
export const GlobalContext = createContext(initialState);

export const GlbalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getTransactions(){
    try{
 const res=await axios.get("/api/v1/transactions");
 dispatch({
  type:"GET_TRANSACTIONS",
  payload:res.data.data

 })
    }
    catch(err){
      dispatch({
        type:"TRANSACTION_ERROR",
        payload:err.data.error
      
       })

    }
  }




  async function deleteTrans(id){
    try{
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({
        type:"DELETE_TRANSACTIONS",
        payload:id
    })

    }
    catch(err){
      dispatch({
        type:"TRANSACTION_ERROR",
        payload:err.data.error
      
       })

    
    }

  
}
async function AddTrans(transaction){
  
   const config={
    headers:{
      "Content-Type":"application/json"
    }
   }
   try{
    const res=await axios.post("/api/v1/transactions",transaction,config)

    dispatch({
      type:"Add_Transactio",
      payload:res.data.data
  })


  }
  catch(err){
    dispatch({
      type:"TRANSACTION_ERROR",
      payload:err.data.error
    
     })

  
  }
    
   
}
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        erro:state.error,
        loading:state.loading,
        deleteTrans,AddTrans,getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
