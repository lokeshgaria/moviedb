import {
  SEARCH_MOVIE,
  FETCH_API,
  FETCH_SINGLE,
  EMPTY_DATA
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
 
    case FETCH_SINGLE:
      return {
        ...state,
        singleMovie: action.payload,
      };

      case SEARCH_MOVIE : return {
        ...state , searchMovie : action.payload 
      }

      case  EMPTY_DATA : return {
        
      }
    default:
      return {
        state,
      };
  }
};
