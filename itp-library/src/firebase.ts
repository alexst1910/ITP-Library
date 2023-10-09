import firebase from "firebase/app";
import { getAuth } from "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = getAuth(app);
export default app;

/*<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAmYstQegGprHyNbCg68rlefnPWCUyDSQY",
    authDomain: "itp-library-60637.firebaseapp.com",
    projectId: "itp-library-60637",
    storageBucket: "itp-library-60637.appspot.com",
    messagingSenderId: "957278329811",
    appId: "1:957278329811:web:728150b1e221f780f4ed26"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>*/
