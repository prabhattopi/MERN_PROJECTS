import {configureStore} from "@reduxjs/toolkit"

import { contacts } from "./services/Contactapi"


export const store=configureStore({
  reducer:{
    [contacts.reducerPath]:contacts.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(contacts.middleware)

})
//middleware caching validation