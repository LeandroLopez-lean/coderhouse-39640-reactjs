
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWjcciqzuj5cby4zv2ivMRVzp8GHRxkbI",
  authDomain: "ecommerce-76278.firebaseapp.com",
  projectId: "ecommerce-76278",
  storageBucket: "ecommerce-76278.appspot.com",
  messagingSenderId: "576825125251",
  appId: "1:576825125251:web:ac3948f0ac960779606eb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
