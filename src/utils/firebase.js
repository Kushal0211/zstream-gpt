// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC-hccX60In1rSn9NrFohBOicytFNSgF8",
  authDomain: "zstream-e328d.firebaseapp.com",
  projectId: "zstream-e328d",
  storageBucket: "zstream-e328d.firebasestorage.app",
  messagingSenderId: "194902624745",
  appId: "1:194902624745:web:7932d49a73c9ae06956378",
  measurementId: "G-T8EM8NHGCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();