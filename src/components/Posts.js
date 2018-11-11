import axios from "axios";
import React, { Component } from "react";

class Posts extends Component {
  state = {
    posts: []
  };

  componentWillMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
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

export default Posts;
