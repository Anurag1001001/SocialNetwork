// Package import
import { combineReducers } from "redux";

// File import
import posts from "./posts";
import auth from "./auth";
import profile from "./profile";

// root Reducer
export default combineReducers({
  posts,
  auth,
  profile,
});
