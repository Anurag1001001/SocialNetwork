// Package import
import { combineReducers } from "redux";

// File import
import posts from "./posts";
import auth from "./auth";
import profile from "./profile";
import friends from "./friends";

// root Reducer
export default combineReducers({
  posts,
  auth,
  profile,
  friends,
});
