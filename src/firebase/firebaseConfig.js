// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: procces.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "shiwu-ec993.firebaseapp.com",
  projectId: "shiwu-ec993",
  storageBucket: "shiwu-ec993.firebasestorage.app",
  messagingSenderId: "775406229076",
  appId: "1:775406229076:web:d53305170ae9d879d67fc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;