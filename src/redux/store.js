import { applyMiddleware, combineReducers, createStore } from "redux";
import genreReducer from "./reducers/genreReducer";
import { thunk } from "redux-thunk";
import favouritesReducer from "./reducers/favouritesReducer";

const rootReducer = combineReducers({
  genres: genreReducer,
  favorites: favouritesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
