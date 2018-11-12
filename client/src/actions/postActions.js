import { FETCH_POSTS, NEW_POST } from "./types";

//Refactor function ES6 syntax

export const fetchPosts = () => dispatch => {
  console.log("fetching");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};
