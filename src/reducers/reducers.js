import { GET_DATA, SINGLE_MOVIE } from "../actions/actions";

const initialState = {
  movies: [],
  singleMovie: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
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
    default:
      return {
        state,
      };
  }
};
