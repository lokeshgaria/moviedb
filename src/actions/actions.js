import axios from "axios";
export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const FETCH_API = "FETCH_API";
export const FETCH_SINGLE = "FETCH_SINGLE";
export const EMPTY_DATA = "EMPTY_DATA";



export const searchMovie = (movieName) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${movieName}`
    );

    dispatch({
      type: SEARCH_MOVIE,
      payload: response.data.results,
      movieName
    });
  };
};

export const fetchMovie = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    );

    dispatch({
      type: FETCH_API,
      payload: response.data.results,
    });
  };
};

export const fetchMoviedata = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    dispatch({ type: FETCH_SINGLE, payload: response.data });
  };
};

export const emptyData = () =>{
  return async (dispatch) =>{
    dispatch({
      type : EMPTY_DATA,
      
    })
  }
}
