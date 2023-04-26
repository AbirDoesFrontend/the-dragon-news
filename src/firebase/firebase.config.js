// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACLAyHcGMBTKajyRuMv8Rs4mJ8kO9YQTs",
  authDomain: "the-dragon-news-2c2d2.firebaseapp.com",
  projectId: "the-dragon-news-2c2d2",
  storageBucket: "the-dragon-news-2c2d2.appspot.com",
  messagingSenderId: "1085701526225",
  appId: "1:1085701526225:web:2a72ed9f87bbcefd132bf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;