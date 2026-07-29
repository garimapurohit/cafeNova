import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRFIHt0lyn1f2mkoYqK-5vpveZfEu74x4",
  authDomain: "cafenova-a4b0b.firebaseapp.com",
  projectId: "cafenova-a4b0b",
  storageBucket: "cafenova-a4b0b.firebasestorage.app",
  messagingSenderId: "565202652072",
  appId: "1:565202652072:web:981b92c3eeb000a31b2b9d",
  measurementId: "G-MHY8ZSNW9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth , app};

