import { FETCH_POSTS, NEW_POST } from "./types";

export function fetchPosts() {
  return function(dispatch) {
    //go to posts component and grab fetch() method
    //from lifecycle method
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      //.then(data => this.setState({ posts: data })); - used to set component state
      .then(posts =>
        dispatch({
          type: FETCH_POSTS, //dispatch action to reducer
          payload: posts //send data as payload - will be reduced inside postReducer
          // function
        })
      );
  };
}

//Refactor function ES6 syntax

export const fetchPosts = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      );
  };

  //FETCH_POSTS has been dispatched to the reducer so in the Reducer create
  //the case for FETCH_POSTS
