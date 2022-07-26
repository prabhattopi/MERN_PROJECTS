export default (state, action) => {
  switch (action.type) {




    case "GET_TRANSACTIONS":{
        return{
             ...state,
        laoding:false,
        transactions:action.payload

        }
       
    }







    case "DELETE_TRANSACTIONS":{
        // localStorage.setItem("item",JSON.stringify(state.transactions.filter(e=>e.id!=action.payload)))
        return{
            ...state,
            transactions:state.transactions.filter(e=>e._id!=action.payload)
            
        }
    }
    case "Add_Transactio":{
        // localStorage.setItem("item",JSON.stringify([action.payload,...state.transactions]))
        return{
            ...state,
            transactions:[...state.transactions,action.payload]
        }
    }
    case "TRANSACTION_ERROR":{
        return{
            ...state,
            error:action.payload
        }
    }
    default:
      return state;
  }
  
};
