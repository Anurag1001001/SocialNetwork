// Package import
import { combineReducers } from "redux";

// File import
import posts from "./posts";
import auth from "./auth";

// root Reducer
export default combineReducers({
  posts,
  auth,
});
