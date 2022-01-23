import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJG2-OTUvZYe-e0OoqH2Wm8ugjP-5WKek",
  authDomain: "challenge-fe330.firebaseapp.com",
  projectId: "challenge-fe330",
  storageBucket: "challenge-fe330.appspot.com",
  messagingSenderId: "160279317809",
  appId: "1:160279317809:web:97d01ffe19e717f62e7410",
  measurementId: "G-DY7BE91S3T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
