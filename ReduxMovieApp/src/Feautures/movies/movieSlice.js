import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import MovieApi from "../../CommonFolder/api/movieApi"
import {APIKey} from "../../CommonFolder/api/MovieApikey"
export const movieText="harry"
export const fetchAsyncMovies=createAsyncThunk("movies/fetchAsyncMovies",async (movieText)=>{
   

        const r=await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        
   return r.data
  
      

})
export const showText="Friends"
export const fetchAsyncShows=createAsyncThunk("movies/fetchAsyncShows",async (showText)=>{
   

        const r=await MovieApi.get(`?apiKey=${APIKey}&s=${showText}&type=series`)
        
   return r.data
  
      

})
export const fetchAsyncMoviesOrShowDetail=createAsyncThunk("movies/fetchAsyncMovieOrShowDetials",async (id)=>{
   

        const r=await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
        
   return r.data
  
      

})
const initialState={
    movies:{},
    shows:{},
    selectedMovieorShows:{},
    loader:false,
 
 

}

//This will take the MOVIE
//TODO
const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies=payload
        },
        // onchan:(state,{payload})=>{
   
           
        //     movieText=payload

        // },
        // onchanShow:(state,{payload})=>{
   
           
        //     showText=payload

        // },
        removeSelectedMovieOrShow:(state)=>{
            state.selectedMovieorShows={}
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:(state)=>{
            return{...state,loader:true}
            // console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("fullfilled")
            return {...state,movies:payload,loader:false}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("rejected")
            
        },
        [fetchAsyncShows.pending]:(state)=>{
            return{...state,loader:true}
            // console.log("Pending")
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("fullfilled")
            return {...state,shows:payload}
        },
        [fetchAsyncMoviesOrShowDetail.fulfilled]:(state,{payload})=>{
            console.log("fullfilled")
            return {...state,selectedMovieorShows:payload}
        },
    }
})

export const {addMovies}=movieSlice.actions
export const {removeSelectedMovieOrShow}=movieSlice.actions
export const {onchan}=movieSlice.actions
export const {onchanShow}=movieSlice.actions
export const getAllMovies=(state)=>state.movies.movies
export const getAllLoader=(state)=>state.movies.loader
export const getAllShows=(state)=>state.movies.shows
export const getSelectedMovieOrShow=(state)=>state.movies.selectedMovieorShows

export default movieSlice.reducer;