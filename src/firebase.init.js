// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx6JzNbrV9D8AfqsAqCixtJUz0zrKV1SY",
  authDomain: "red-onion-ac480.firebaseapp.com",
  projectId: "red-onion-ac480",
  storageBucket: "red-onion-ac480.appspot.com",
  messagingSenderId: "9812033198",
  appId: "1:9812033198:web:d39c84508eccadfccff73f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;