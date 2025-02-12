// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWd9SviVWHyLot0_FMVSXDNkTYjF4j5sM",
  authDomain: "apps-b1386.firebaseapp.com",
  projectId: "apps-b1386",
  storageBucket: "apps-b1386.firebasestorage.app",
  messagingSenderId: "232327378582",
  appId: "1:232327378582:web:d6ed240537dcf56fc1b4b7",
  measurementId: "G-VVKJPPVNTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);