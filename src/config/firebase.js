// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVtSnxVImXMlt2wUN1E6SEfJ9QvKAD1mg",
  authDomain: "todoappkiwi.firebaseapp.com",
  projectId: "todoappkiwi",
  storageBucket: "todoappkiwi.appspot.com",
  messagingSenderId: "177572799418",
  appId: "1:177572799418:web:1fbe27822ce2422574b383"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);