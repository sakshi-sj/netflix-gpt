// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ5T3GfEBD_-5FCZtFEs5qnWxpUdDA-JY",
  authDomain: "netflixgpt-7810e.firebaseapp.com",
  projectId: "netflixgpt-7810e",
  storageBucket: "netflixgpt-7810e.appspot.com",
  messagingSenderId: "783611279819",
  appId: "1:783611279819:web:34eb0ba1a2f7559755de4e",
  measurementId: "G-Y7SJJR8P1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();