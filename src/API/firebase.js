// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1hKnHzvB5erAJ1oji7HB9dHinvn0lCJQ",
  authDomain: "web-size.firebaseapp.com",
  projectId: "web-size",
  storageBucket: "web-size.appspot.com",
  messagingSenderId: "528842061086",
  appId: "1:528842061086:web:bc190bb552170b5ec9450f",
  measurementId: "G-3ZW38LDK42",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
