
import { ActionTypes } from "../constants/actiontypes"

const initialstate={
    products:[]
}

export const productReducer=(state=initialstate,{type,payload})=>{
  switch(type){
case ActionTypes.FETCH_PRODUCTS:return{
       ...state,
       products:payload
    }
    default :return state
  }

}
export const selectedProductReducer=(state={},{type,payload})=>{
  switch(type){
    case ActionTypes.SELECTED_PRODUCT:return{
      ...state,...payload
      
    }
    case ActionTypes.REMOVE_SELECTED_PRODUCT:return {}


    default:return state
  }
  

}