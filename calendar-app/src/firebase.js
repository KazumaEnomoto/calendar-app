// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZHaX9a35DzdGwmDevsL-Nd2_ZMMgoxww",
  authDomain: "calendar-app-ea15f.firebaseapp.com",
  projectId: "calendar-app-ea15f",
  storageBucket: "calendar-app-ea15f.appspot.com",
  messagingSenderId: "500524639559",
  appId: "1:500524639559:web:6e531e305958d6913dd862",
  measurementId: "G-2Z0DJ2QQGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);