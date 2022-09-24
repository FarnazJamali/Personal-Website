import React, { Component } from "react";
class Post extends Component {
  state = {};
  render() {
    const { postData: post, showComments } = this.props;

    return (
      <>
        <div className="card-group" key={post.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#comments${post.id}`}
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Comments
                </button>
              </p>
              <div className="collapse" id={`comments${post.id}`}>
                {showComments.map((comment) => (
                  <div className="card card-body" key={comment.id}>
                    {comment.body}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Post;
