import React, { Component } from "react";
import { connect } from "react-redux";

class settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "",
      password: "",
      confirmPassword: "",
      editMode: false,
    };
  }
  render() {
    const { user } = this.props.auth;
    const { editMode } = this.state;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>
        <div className="field">
          <div className="field-label">name</div>
          {editMode ? (
            <input
              type="text"
              onChange={() => this.handleChange()}
              value={this.state.name}
            />
          ) : (
            <div className="field-value">{user.name}</div>
          )}
        </div>

        {editMode && (
          <div className="field">
            <div className="field-label">New password</div>

            <input
              type="password"
              onChange={() => this.handleChange()}
              value={this.state.password}
            />
          </div>
        )}

        {editMode && (
          <div className="field">
            <div className="field-label">Confirm password</div>

            <input
              type="password"
              onChange={() => this.handleChange()}
              value={this.state.confirmPassword}
            />
          </div>
        )}

        <div className="btn-grp">
          {editMode ? (
            <button className="button save-btn">Save</button>
          ) : (
            <button className="button edit-btn">Edit profile</button>
          )}

          {editMode && <div className="go-back">Go back</div>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(settings);
