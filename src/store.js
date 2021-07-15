import {movieReducer} from "./reducers/reducers"
import {createStore} from "redux";

const store = createStore(movieReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;