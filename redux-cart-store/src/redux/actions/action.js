import fakestoreapi from "../../api/fakeStoreapi"

import { ActionTypes } from "../constants/actiontypes"

export const fetchProducts=()=>async(dispatch)=>{
    const response=await fakestoreapi.get('/products')
    dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
   }
    
export const fetchSelectedProducts=(id)=>async(dispatch)=>{
    const response=await fakestoreapi.get(`/products/${id}`)
    dispatch({type:ActionTypes.SELECTED_PRODUCT,payload:response.data})
   }
    
export const removeSelectedProdcut=()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    }
}