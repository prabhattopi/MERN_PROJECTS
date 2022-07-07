export default (state, action) => {
  switch (action.type) {

    case "DELETE_TRANSACTIONS":{
        localStorage.setItem("item",JSON.stringify(state.transactions.filter(e=>e.id!=action.payload)))
        return{
            ...state,
            transactions:state.transactions.filter(e=>e.id!=action.payload)
            
        }
    }
    case "Add_Transactio":{
        localStorage.setItem("item",JSON.stringify([action.payload,...state.transactions]))
        return{
            ...state,
            transactions:[action.payload,...state.transactions]
        }
    }
    default:
      return state;
  }
};
