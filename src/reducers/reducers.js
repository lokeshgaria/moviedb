import {
   
  SINGLE_MOVIE,
  FETCH_API,
  FETCH_SINGLE,
} from "../actions/actions";

const initialState = {
  movies: [],
  singleMovie: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API:
      return {
        ...state,
        movies: action.payload,
        singleMovie: state.singleMovie,
      };
    case SINGLE_MOVIE:
      return {
        ...state,
        singleMovie: action.payload,
      };

    case FETCH_SINGLE:
      return {
        ...state,
        singleMovie: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
