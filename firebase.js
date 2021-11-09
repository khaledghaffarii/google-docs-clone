// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAb1EpCFzgIS507bq3pKF866ELndREzMdQ",
  authDomain: "docs-yt-f6ab1.firebaseapp.com",
  projectId: "docs-yt-f6ab1",
  storageBucket: "docs-yt-f6ab1.appspot.com",
  messagingSenderId: "817485130458",
  appId: "1:817485130458:web:4b1611fd0753adf80713e3",
  measurementId: "G-LV5VQJCVR9",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
export { db };
