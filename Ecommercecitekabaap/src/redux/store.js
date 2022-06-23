import { legacy_createStore } from "redux"
import rootReducers from "./reducers/index"
export const store=legacy_createStore(rootReducers)