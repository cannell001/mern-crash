//Combine all Reducers in rootReducer
//Create a postReducer and reference it as fetchPosts
import { combineReducers } from "redux";
import postReducer from "./postReducer";

export default combineReducers({
  posts: postReducer
});
