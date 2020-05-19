import React, { Component } from "react";
import firebase from "firebase";
import Posts from "./Posts";

class PostForm extends Component {
  state = { title: "", note: "" };

  database = firebase.database().ref();
  user = firebase.auth().currentUser.uid;
  rootRef = this.database.child("Users/" + this.user);

  handleTitleChanged = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleNoteChanged = (event) => {
    this.setState({
      note: event.target.value,
    });
  };

  handleAddChanged = () => {
    this.submitPost(this.state.title, this.state.note);
    this.setState({
      title: "",
      note: "",
    });
  };

  submitPost = (title, note) => {
    let post = this.rootRef.push();
    post.set({
      title: title,
      note: note,
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="title"
          value={this.state.title}
          onChange={this.handleTitleChanged}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="note"
          value={this.state.note}
          onChange={this.handleNoteChanged}
        />
        <button onClick={this.handleAddChanged}>Add</button>

        <Posts />
      </div>
    );
  }
}

export default PostForm;
