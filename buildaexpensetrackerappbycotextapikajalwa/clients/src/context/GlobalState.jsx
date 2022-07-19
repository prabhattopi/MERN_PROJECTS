import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"
let data=JSON.parse(localStorage.getItem("item"))||[]
const initialState = {
  transactions: data
};

//Actions


//create Context
export const GlobalContext = createContext(initialState);

export const GlbalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function deleteTrans(id){
    dispatch({
        type:"DELETE_TRANSACTIONS",
        payload:id
    })
}
function AddTrans(transaction){
    
    dispatch({
        type:"Add_Transactio",
        payload:transaction
    })
}
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,deleteTrans,AddTrans
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
