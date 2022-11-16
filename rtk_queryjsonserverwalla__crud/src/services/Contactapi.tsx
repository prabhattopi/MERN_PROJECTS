import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { Conta } from "../App"
import { Contact } from "../models/contact.model"

export const contacts=createApi({
    reducerPath:"contacts",
    baseQuery:fetchBaseQuery({baseUrl:"https://moceserver.herokuapp.com"}),
    tagTypes:["Contact","Conta"],//because autofetching
    endpoints:(builder)=>({
        contacts:builder.query<Contact[],void>({
            query:()=>"/contacts",
            providesTags:["Contact"]
        }),
        contact:builder.query<Contact,number>({
            query:(id)=>`/contacts/${id}`,
            providesTags:["Contact"]

        }),
        addContact:builder.mutation<void,Conta>({
            query:contact=>({
                url:"/contacts",
                method:"POST",
                body:contact

            }),
            invalidatesTags:["Contact"]
        }),
        updateContact:builder.mutation<void,Contact>({
            query:({id,...rest})=>({
                url:`/contacts/${id}`,
                method:"PUT",
                body:rest

            }),
            invalidatesTags:["Contact"]

        }),
        deleteContact:builder.mutation<void,number>({
            query:(id)=>({
                url:`/contacts/${id}`,
                method:"DELETE",
           

            }),
            invalidatesTags:["Contact"]
        }),
    })
})

//it offers from query whenever we created
//how do we decide the name of contacts by above contacts to fir Contacts agar getContacts to GetContacts..

export const {useContactsQuery,useContactQuery,useAddContactMutation,useUpdateContactMutation,useDeleteContactMutation}=contacts
//endpoints are use builderPattern
