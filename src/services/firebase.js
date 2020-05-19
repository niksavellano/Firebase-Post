import firebase from "firebase";

export var firebaseConfig = {
  apiKey: "AIzaSyBWZET7ncDoeU0SBVzNXnvJ_k-c6Bn4d90",
  authDomain: "userposts-11f4e.firebaseapp.com",
  databaseURL: "https://userposts-11f4e.firebaseio.com",
  projectId: "userposts-11f4e",
  storageBucket: "userposts-11f4e.appspot.com",
  messagingSenderId: "1059678426182",
  appId: "1:1059678426182:web:1f9cabb3f0f1569e6fa647",
  measurementId: "G-0J07TKQ4Z2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
