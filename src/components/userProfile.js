import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriend, removeFriend } from "../actions/friends";
import { fetchUserProfile } from "../actions/profile";
import { APIUrls } from "../helpers/url";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";

// xxxxxxxxxxxxxxxx Notes xxxxxxxxxxxxxxxxxx
// So whenever i click on the user profile react router will redirect me to this component iff i'm loggedin otherwise react-router redirect me to the login page and ask to log in.
// The task here is to display the details of user like username, email, and other basics info and how we're gonna get these details, basically when i'll be clicking to the user profile that particular user's id will be pass in the URL (as params) and will make async call and fetch details via API, so that's the logic.

// and we know that if we need to fetch something using API then we dispatch an action from componentDidMount() function.

// xxxxxxxxxxxxxxxx Notes xxxxxxxxxxxxxxxxxx

class userProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: null,
      error: null,
      successMessage: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    if (match.params.userId) {
      // dispatch an action
      this.props.dispatch(fetchUserProfile(match.params.userId));
    }
  }

  checkIfUserIsAFriends = () => {
    // console.log("coming from userProfile.js", this.props);
    const { match, friends } = this.props;
    const userId = match.params.userId;
    const index = friends.map((friend) => friend.to_user._id).indexOf(userId);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  handleAddFriendClick = async () => {
    const userId = this.props.match.params.userId;
    const url = APIUrls.addFriend(userId);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.success) {
      this.setState({
        success: true,
        successMessage: "Added Friend Successfully!",
      });
      // dispatch an action
      this.props.dispatch(addFriend(data.data.friendship));
    } else {
      this.setState({
        success: null,
        error: data.message,
      });
    }
  };
  handleRemoveFriendClick = async () => {
    const userId = this.props.match.params.userId;
    const url = APIUrls.removeFriend(userId);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.success) {
      this.setState({
        success: true,
        successMessage: "Removed Friend Successfully!",
      });
      // dispatch an action
      this.props.dispatch(removeFriend(userId));
    } else {
      this.setState({
        success: null,
        error: data.message,
      });
    }
  };

  render() {
    const { profile } = this.props;
    const { user } = profile;

    if (profile.inProgress) {
      // we can add loadder(or some animation) here but for now using h1 heading
      if (profile.inProgress) {
        return <div className="loader ml-auto mr-auto mt-5"></div>;
      }
    }
    const isUserAFriend = this.checkIfUserIsAFriends();
    const { success, error, successMessage } = this.state;
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
          <div className="field-value">{user.name}</div>
        </div>
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        <div className="btn-grp">
          {!isUserAFriend ? (
            <button
              className="button save-btn"
              onClick={this.handleAddFriendClick}
            >
              Add Friend
            </button>
          ) : (
            <button
              className="button save-btn"
              onClick={this.handleRemoveFriendClick}
            >
              Remove Friend
            </button>
          )}

          {success && (
            <div className="alert success-dailog">{successMessage}</div>
          )}
          {error && <div className="alert error-dailog">{error}</div>}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ profile, friends }) {
  return {
    profile,
    friends,
  };
}
export default connect(mapStateToProps)(userProfile);
