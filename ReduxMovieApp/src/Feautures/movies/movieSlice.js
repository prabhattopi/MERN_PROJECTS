import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import MovieApi from "../../CommonFolder/api/movieApi"
import {APIKey} from "../../CommonFolder/api/MovieApikey"
let movieText="harry"
export const fetchAsyncMovies=createAsyncThunk("movies/fetchAsyncMovies",async ()=>{
   

        const r=await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        
   return r.data
  
      

})
let showText="Friends"
export const fetchAsyncShows=createAsyncThunk("movies/fetchAsyncShows",async ()=>{
   

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
        onchan:(state,{payload})=>{
   
           
            movieText=payload

        },
        onchanShow:(state,{payload})=>{
   
           
            showText=payload

        },
        removeSelectedMovieOrShow:(state)=>{
            state.selectedMovieorShows={}
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("fullfilled")
            return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("rejected")
            
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
export const getAllShows=(state)=>state.movies.shows
export const getSelectedMovieOrShow=(state)=>state.movies.selectedMovieorShows

export default movieSlice.reducer;