import { combineReducers } from "redux";

import { productReducer, selectedProductReducer } from "./productReducer";
const reducers=combineReducers({
    allProducts:productReducer,
    oneprod:selectedProductReducer
})
export default reducers