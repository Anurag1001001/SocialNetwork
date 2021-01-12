import React, { Component } from "react";

// xxxxxxxxxxxxxxxx Notes xxxxxxxxxxxxxxxxxx
// So whenever i click on the user profile react router will redirect me to this component iff i'm loggedin otherwise react-router redirect me to the login page and ask to log in.
// The task here is to display the details of user like username, email, and other basics info and how we're gonna get these details, basically when i'll be clicking to the user profile that particular user's id will be pass in the URL (as params) and will make async call and fetch details via API, so that's the logic.

// and we know that if we need to fetch something using API then we dispatch an action from componentDidMount() function.

// xxxxxxxxxxxxxxxx Notes xxxxxxxxxxxxxxxxxx

class userProfile extends Component {
  componentDidMount() {
    const { match } = this.props;
    if (match.params.userId) {
      // dispatch an action
    }
  }

  render() {
    console.log("this.props", this.props);
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>

        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">Some Name</div>
        </div>
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">Test@test.com</div>
        </div>

        <div className="btn-grp">
          <button className="button save-btn">Add Friend</button>
        </div>
      </div>
    );
  }
}

export default userProfile;
