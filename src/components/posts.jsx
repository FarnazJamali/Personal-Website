import Axios from "axios";
import React, { Component } from "react";
import Post from "./post";
class Posts extends Component {
  state = {
    posts: [],
    comments: [],
  };
  async componentDidMount() {
    const { data: posts } = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const { data: comments } = await Axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    this.setState({ posts, comments });
  }
  showComments = (postid) => {
    const comments = [...this.state.comments];
    return comments.filter((comment) => postid === comment.postId);
  };
  handleAddPost = async () => {
    const newPost = { title: "a", body: "b" };
    const addPosts = await Axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    );
    const posts = [newPost, ...this.state.posts];
    this.setState({ posts });
  };
  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <h3>Posts</h3>
        <button
          className="btn btn-success m-2"
          onClick={() => this.handleAddPost()}
        >
          Add Posts
        </button>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {posts.map((post, index) => (
            <Post
              postData={post}
              showComments={this.showComments(post.id)}
              key={index}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Posts;
