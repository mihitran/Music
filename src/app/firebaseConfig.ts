// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoQ24exWhFaxZguLNyaQNGsJ3TX27mZC0",
  authDomain: "thu-music.firebaseapp.com",
  databaseURL: "https://thu-music-default-rtdb.firebaseio.com",
  projectId: "thu-music",
  storageBucket: "thu-music.firebasestorage.app",
  messagingSenderId: "1076874372885",
  appId: "1:1076874372885:web:b463f486944f9549b86b1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase = getDatabase(app);
export const authFirebase = getAuth(app);