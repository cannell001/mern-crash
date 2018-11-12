//mapStateToProps()
//add props to propTypes - import PropTypes
import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import PropTypes from "prop-types";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    //const postItems = this.state.posts.map(post => (
    //map state to props - below
    const postItems = this.props.posts.map(post => (
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

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

//map items from state to posts prop
const mapStateToProps = state => ({
  posts: state.posts.items, //posts references postReducer - items are returned to postReducer
  newPost: state.posts.item //grab item returned to postReducer and map it to newItem prop
}); //modify render() to extract posts from props not state

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
