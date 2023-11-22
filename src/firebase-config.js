// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import{getFirestore}from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR5MMgBxpb9Ijr6GXshCs4T7PPzt8Rb0k",
  authDomain: "blogproject-9bbb0.firebaseapp.com",
  projectId: "blogproject-9bbb0",
  storageBucket: "blogproject-9bbb0.appspot.com",
  messagingSenderId: "789475413058",
  appId: "1:789475413058:web:2607a116095cfc0271f1db",
  measurementId: "G-RP9073PEJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const provider=new GoogleAuthProvider();