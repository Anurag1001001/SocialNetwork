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
    // dispatch action
    this.props.dispatch(createPost(this.state.content));
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
