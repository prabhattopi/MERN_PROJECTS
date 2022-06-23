const addItem=[]
const addItems=(state=addItem,{type,payload})=>{

    switch(type){
    case "ADDITEM":return [...state,payload]

    case "DELITEM":return state=state.filter(e=>e.id!==payload.id)
  
    default:return state
  
    }

}
export default addItems