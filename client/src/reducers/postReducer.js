//evaluate actions FETCH_POST, NEW_POST
//actions have types - create a types.js file and place in folder actions
//create initial state
import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [], //represents the posts that come in from the fetch() request in actions
  item: {} //represents the single post returned in the response
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

//Reducer is now ready to evaluate action types in the switch
//Lets create the actions file - postActions.js
