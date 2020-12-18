import { combineReducers } from "redux";
import products from "./productsReducer";
import search from "./searchReducer";

const appReducers = combineReducers({
  products,
  search,
});

export default appReducers;
