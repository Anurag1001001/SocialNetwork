import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.emailInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("emailInputRef", this.emailInputRef);
    console.log("passwordInputRef", this.passwordInputRef);
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
            ref={this.emailInputRef}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            ref={this.passwordInputRef}
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

// There are two ways to handle forms in react, the very first one is by Uncontrolled component and the second way is by using Controlled component.
// 1. By using UnControlled component :- simply means that where data is not managed by react component itself, the form data where the email field, password field is not managed by react itself but will be managed by DOM. So let's for the understanding purpose make our login Form Uncontrolled Component
