// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnHk9-LDQn7y2b40mzXEJVHnSH_XUmAZY",
  authDomain: "today-news-6031a.firebaseapp.com",
  projectId: "today-news-6031a",
  storageBucket: "today-news-6031a.firebasestorage.app",
  messagingSenderId: "141634312183",
  appId: "1:141634312183:web:57505166496608eabc00f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app