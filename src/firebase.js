
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyC1jpI9W8hHgoqw02soxs6F0C0SsWnMun0",
    authDomain: "netflix-clone1-b8ff6.firebaseapp.com",
    projectId: "netflix-clone1-b8ff6",
    storageBucket: "netflix-clone1-b8ff6.appspot.com",
    messagingSenderId: "181746504251",
    appId: "1:181746504251:web:c114daf0a7505bbd00421e"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
