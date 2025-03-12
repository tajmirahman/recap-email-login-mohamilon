// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqO_znSfqNdIHHeMphFXCwFXCnmkMUUmw",
  authDomain: "context-api-login-bd3aa.firebaseapp.com",
  projectId: "context-api-login-bd3aa",
  storageBucket: "context-api-login-bd3aa.firebasestorage.app",
  messagingSenderId: "629266513427",
  appId: "1:629266513427:web:4b69af9297415eb8cc89e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;