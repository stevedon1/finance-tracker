// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjkqJjJGtORO2IkEIS-U0RXXpVPBQUajI",
  authDomain: "coinome-65f50.firebaseapp.com",
  projectId: "coinome-65f50",
  storageBucket: "coinome-65f50.firebasestorage.app",
  messagingSenderId: "7208596195",
  appId: "1:7208596195:web:86eca976e1872b0da38bd6",
  measurementId: "G-QWT8SGWPT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);