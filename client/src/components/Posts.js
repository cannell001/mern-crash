//implement the FETCH_POSTS action in the Component
//to transfer state from store to component
//import connect to link component to redux store
//redux store has been 'provided' by the Provider component
//need to call action FETCH_POSTS so import it as well
//export default connect()
//call fetchPosts() as a prop in lifecycle method
//fetchPosts() dispatches type and payload to reducer - console.log('fetching');
//State has been returned to component by reducer - console.log('reducer')
//now we need to get the new items from the State
//we use mapStateToProps()
import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default connect(
  null,
  { fetchPosts }
)(Posts);
