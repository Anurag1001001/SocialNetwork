// Package import
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// file import
import { login, clearAuthState } from "../actions/auth";

// There are two ways to handle forms in react, the very first one is by Uncontrolled component and the second way is by using Controlled component.
// 1. By using UnControlled component :- simply means that where data is not managed by react component itself, the form data where the email field, password field is not managed by react itself but will be managed by DOM. So let's for the understanding purpose make our login Form Uncontrolled Component
// 2. By using controlled component :- means that data will be managed by react component itself unlike unControlled component(data manage by DOM and then sends to the server), here in Controlled component state thing aa jati jhn phle se he data field me empty string reside krega and onChange of input field, value capture kr k state update kr denge and head towards further process.

// We generally manage data by controlled component, in some case where i want to use animation or give alert or popUp to the input field while user typing the field then we can use uncontrolled component.

class Login extends Component {
  constructor(props) {
    super(props);
    // Uncontrolled Component :--

    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();

    // Controlled Component :--
    this.state = {
      email: "",
      password: "",
    };
  }
  componentWillUnmount() {
    // so i was having a problem like when i was entering a wrong email or password while login i got an error and that error always exists(when reroute to this address error exists) coz i set error value of 'auth' state.
    // TO overCome with this problem i need to clear the auth state so i was thinking to dispatch clearAuthstate() function as soon as i got the error(in login() of auth.js(action/auth.js), after loginFailed) but by doing error will not be displayed to the component, so what can i do is dispatch(clearAuthState()) from componentwillUnmount means that when i'm distroying my component then this function will be called
    this.props.dispatch(clearAuthState());
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log("this.state(Coming from components/login)", this.state);
    const { email, password } = this.state;
    this.props.dispatch(login(email, password));
  };
  render() {
    const { error, inProgress, isLoggedin } = this.props.auth;
    if (isLoggedin) {
      return <Redirect to="/" />;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        {error && <div className="alert error-dialog">{error}</div>}
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            // ref={this.emailInputRef}
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            // ref={this.passwordInputRef}
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>
        <div className="field">
          {/* getting value of inProgress from auth state so that i can make a button disbale and stops user to make multiple requests again and again, while first request is taking place and server is doing their job, and button will be active as sson asserver responds. I did this to avoid multiple unneccessary load to the server that's it. */}

          {inProgress ? (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Logging in ...
            </button>
          ) : (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Log In
            </button>
          )}
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
export default connect(mapStateToProps)(Login);
