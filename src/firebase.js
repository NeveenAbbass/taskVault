// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmJyFxKfIV2FQ2mF2fhIMIYTeY0PxAqpg",
  authDomain: "taskvault-886a6.firebaseapp.com",
  projectId: "taskvault-886a6",
  storageBucket: "taskvault-886a6.appspot.com",
  messagingSenderId: "462949536765",
  appId: "1:462949536765:web:67fa1539b49e5b264d3f94",
  measurementId: "G-0NSHXVFQ87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

