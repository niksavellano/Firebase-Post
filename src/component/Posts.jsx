import React, { Component } from "react";
import firebase from "firebase";
import $ from "jquery";

class Posts extends Component {
  state = { posts: [] };

  database = firebase.database().ref();
  user = firebase.auth().currentUser.uid;
  rootRef = this.database.child("Users/" + this.user);

  componentDidMount = () => {
    this.rootRef.on("child_added", (snap) => {
      let title = snap.child("title").val();
      let note = snap.child("note").val();
      let container = `<div> <h1>${title}</h1><h2>${note}</h2></div>`;
      $("#Posts").append(`${container}`);
    });
  };
  render() {
    return <div id="Posts"></div>;
  }
}

export default Posts;
