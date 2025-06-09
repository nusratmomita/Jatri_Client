import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOgeIIj_AwzB4aOEu7718K9rgCMY1AkfE",
  authDomain: "jatri-9cc51.firebaseapp.com",
  projectId: "jatri-9cc51",
  storageBucket: "jatri-9cc51.firebasestorage.app",
  messagingSenderId: "834577553963",
  appId: "1:834577553963:web:ca066414bac5f394c6686e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);