// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnJrPV-XhR0xSKDR-2o9w6nsXqnThM4qI",
  authDomain: "portfolio2023-9edb9.firebaseapp.com",
  projectId: "portfolio2023-9edb9",
  storageBucket: "portfolio2023-9edb9.appspot.com",
  messagingSenderId: "348969455668",
  appId: "1:348969455668:web:7c19b83a3d6e61c50eba61",
  measurementId: "G-G24HH1Y009",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
