// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG2yIylWQFd-O4rOlCAd5SA_TPA1ma3BA",
  authDomain: "pantry-tracker-e13a3.firebaseapp.com",
  projectId: "pantry-tracker-e13a3",
  storageBucket: "pantry-tracker-e13a3.appspot.com",
  messagingSenderId: "564100440885",
  appId: "1:564100440885:web:e1ea481ebdf7301753227c",
  measurementId: "G-3WXKWQQXRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestore = getFirestore(app);
export { firestore };