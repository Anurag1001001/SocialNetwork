import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup, clearAuthState } from "../actions/auth";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      confirm_password: "",
    };
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }
  handleInputChange = (field, value) => {
    this.setState({ [field]: value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { email, password, confirm_password, name } = this.state;
    this.props.dispatch(signup(name, email, password, confirm_password));
  };

  render() {
    const { inProgress, error, isLoggedIn } = this.props.auth;
    if (isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign Up</span>
        {error && <div className="alert error-dailog">{error}</div>}

        <div className="field">
          <input
            type="text"
            id="Name"
            className="form-control"
            placeholder="Enter you name!"
            required
            onChange={(event) =>
              this.handleInputChange("name", event.target.value)
            }
          />
        </div>
        <div className="field">
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder="example@abc.com"
            required
            onChange={(event) =>
              this.handleInputChange("email", event.target.value)
            }
          />
        </div>
        <div className="field">
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password here!"
            required
            onChange={(event) =>
              this.handleInputChange("password", event.target.value)
            }
          />
        </div>
        <div className="field">
          <input
            type="password"
            id="reenter-password"
            className="form-control"
            placeholder="Re-Enter your password here!"
            required
            onChange={(event) =>
              this.handleInputChange("confirm_password", event.target.value)
            }
          />
        </div>
        <div className="field">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.onFormSubmit}
            disabled={inProgress}
          >
            {inProgress ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Signup);
