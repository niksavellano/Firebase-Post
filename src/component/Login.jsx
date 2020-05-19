import React, { Component } from "react";
import { firebaseConfig } from "../services/firebase";
import firebase from "firebase";
import LoginPage from "./LoginPage";
import PostForm from "./PostForm";

class Login extends Component {
  state = { isSignedIn: false };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
    });
  };
  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <span>
            <h1>Posts</h1>
            <button
              onClick={() => {
                firebase.auth().signOut();
              }}
            >
              Signout
            </button>
            <PostForm />
          </span>
        ) : (
          <span>
            <LoginPage />
          </span>
        )}
      </div>
    );
  }
}

export default Login;
