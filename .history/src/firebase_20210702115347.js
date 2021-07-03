import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyA-mRKwao3P2zFQQP1HTUDnlO-ewwxWC1s",
  authDomain: "islamiyya-725d4.firebaseapp.com",
  projectId: "islamiyya-725d4",
  storageBucket: "islamiyya-725d4.appspot.com",
  messagingSenderId: "1078561834776",
  appId: "1:1078561834776:web:9c7875bf634a2e2b5b406d",
  measurementId: "G-GB4BW5WS77",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");
const likesCollection = db.collection('likes')

// export utils/refs
export { db, auth, usersCollection, likesCollection };
export default firebase.database();
