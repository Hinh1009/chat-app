// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCuvMmbMsEroH3n3X5zXR7d7nHwQ9O4aA4",
  authDomain: "chat-app-345d5.firebaseapp.com",
  projectId: "chat-app-345d5",
  storageBucket: "chat-app-345d5.appspot.com",
  messagingSenderId: "598016231687",
  appId: "1:598016231687:web:0e38a7118434e1bcc25da2",
  measurementId: "G-TN4L9F7Y9K",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

if (window.location.hostname === "localhost") {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { auth, db, storage, timestamp };
export default firebase;
