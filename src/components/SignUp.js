import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// file import
import { clearAuthState } from "../actions/auth";

class SignUp extends Component {
  componentWillUnmount() {
    // so i was having a problem like when i was entering a wrong email or password while login i got an error and that error always exists(when reroute to this address error exists) coz i set error value of 'auth' state.
    // TO overCome with this problem i need to clear the auth state so i was thinking to dispatch clearAuthstate() function as soon as i got the error(in login() of auth.js(action/auth.js), after loginFailed) but by doing error will not be displayed to the component, so what can i do is dispatch(clearAuthState()) from componentwillUnmount means that when i'm distroying my component then this function will be called
    this.props.dispatch(clearAuthState());
  }
  render() {
    const { error, inProgress, isLoggedin } = this.props.auth;
    if (isLoggedin) {
      return <Redirect to="/" />;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="field">
          <button>Log In</button>
        </div>
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(SignUp);
