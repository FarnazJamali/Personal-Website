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
    const { data: addPosts } = await Axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    );
    const posts = [addPosts, ...this.state.posts];
    this.setState({ posts });
  };
  handleUpdate = async (post) => {
    post.title = "Upadated!";
    const { data: updatePosts } = await Axios.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      post
    );
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...updatePosts };
    this.setState(posts);
    // console.log(post);
  };
  handleDelete = async (postId) => {
    await Axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const posts = this.state.posts.filter((p) => p.id !== postId);
    this.setState({ posts });
    console.log(posts);
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
              onUpdate={this.handleUpdate}
              onDelete={this.handleDelete}
              key={index}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Posts;
