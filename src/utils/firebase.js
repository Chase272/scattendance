import "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtl5oixDmMi77Kf_XGC1h4Fp3pYE8hH2Q",
  authDomain: "attendence-3.firebaseapp.com",
  projectId: "attendence-3",
  storageBucket: "attendence-3.appspot.com",
  messagingSenderId: "571501170757",
  appId: "1:571501170757:web:929e01f6ae4d7441a7532c",
  measurementId: "G-9S96NNBB76",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
