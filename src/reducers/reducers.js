import { GET_DATA } from "../actions/actions";

const initialState = {
  movies: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        movies: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

 
