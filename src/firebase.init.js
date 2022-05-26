// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuX2yjTbWFYKeICTo6F9OO8478sS2jZI4",
  authDomain: "warbitor.firebaseapp.com",
  projectId: "warbitor",
  storageBucket: "warbitor.appspot.com",
  messagingSenderId: "525614498513",
  appId: "1:525614498513:web:01284e872a23cc2f9a3bf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;