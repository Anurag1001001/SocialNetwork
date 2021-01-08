import React, { Component } from "react";

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
    console.log("this.state(Coming from components/login)", this.state);
  };
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
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
          <button onClick={this.handleFormSubmit}>Log In</button>
        </div>
      </form>
    );
  }
}

export default Login;
