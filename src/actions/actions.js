 export const GET_DATA = "GET_DATA";
 export const SINGLE_MOVIE = "SINGLE_MOVIE"

 export const getData = (data) =>{
     return {
         type : GET_DATA,
         payload : data
     }
 }

 export const getSingleMovie = (data) =>{
     return {
         type : SINGLE_MOVIE,
         payload : data
     }
 }