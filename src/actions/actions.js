import axios from "axios";
export const GET_DATA = "GET_DATA";
export const SINGLE_MOVIE = "SINGLE_MOVIE";
export const FETCH_API = "FETCH_API";
export const FETCH_SINGLE = "FETCH_SINGLE";

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
      const response = await axios.get( `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
      dispatch({type : FETCH_SINGLE, payload : response.data })
  }
}

export const getSingleMovie = (data) => {
  return {
    type: SINGLE_MOVIE,
    payload: data,
  };
};
