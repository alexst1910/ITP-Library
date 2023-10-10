// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmYstQegGprHyNbCg68rlefnPWCUyDSQY",
  authDomain: "itp-library-60637.firebaseapp.com",
  projectId: "itp-library-60637",
  storageBucket: "itp-library-60637.appspot.com",
  messagingSenderId: "957278329811",
  appId: "1:957278329811:web:728150b1e221f780f4ed26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
