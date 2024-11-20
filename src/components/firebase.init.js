// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnW5ZgFpNXks_WqD7AjJekqoTVp_eQKXk",
  authDomain: "english-vocabulary-1afb3.firebaseapp.com",
  projectId: "english-vocabulary-1afb3",
  storageBucket: "english-vocabulary-1afb3.firebasestorage.app",
  messagingSenderId: "1093279086088",
  appId: "1:1093279086088:web:57ee09b3c6e1898f5283bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth