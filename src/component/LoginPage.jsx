import React, { Component } from "react";
import firebase from "firebase";

class LoginPage extends Component {
  state = { email: "", password: "" };
  handleEmailChanged = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handlePasswordChanged = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleSubmitChanged = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        let errorMessagge = error.message;
        window.alert("Error: " + errorMessagge);
      });
  };
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleEmailChanged}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handlePasswordChanged}
        />
        <button onClick={this.handleSubmitChanged}>Login</button>
      </div>
    );
  }
}

export default LoginPage;
