import { legacy_createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import {reducer} from "./reducer"

export const store=legacy_createStore(reducer,composeWithDevTools())

