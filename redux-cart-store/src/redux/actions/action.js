import { ActionTypes } from "../constants/actiontypes"

export const setProducts=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products

    }
}


export const selectedProduct=(product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product

    }
}
export const removeSelectedProdcut=()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    }
}