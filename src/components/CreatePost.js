import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/posts";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  handleOnClick = () => {
    //dispatch an action to create a post.
    if (document.getElementsByClassName("add-post")[0].value === "") {
      window.alert("Please write some text in your post!");
      return;
    }
    this.props.dispatch(createPost(this.state.content));
    document.getElementsByClassName("add-post")[0].value = "";
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  render() {
    return (
      <div className="create-post">
        <textarea
          className="add-post"
          value={this.state.content}
          onChange={this.handleChange}
          placeholder="What's on your mind?"
        />

        <div>
          <button id="add-post-btn" onClick={this.handleOnClick}>
            Add Post
          </button>
        </div>
      </div>
    );
  }
}

// I just want to have dispatch() function from the store that's it so it's totally up to me whether i have to pass mapStateToProps() to connect funtion or not
export default connect()(CreatePost);
