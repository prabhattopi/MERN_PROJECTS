import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBn72H8n13d2eT0XPWNEvnQ4hNFwo1eXAk",
  authDomain: "challo-ea050.firebaseapp.com",
  projectId: "challo-ea050",
  storageBucket: "challo-ea050.appspot.com",
  messagingSenderId: "1078501247860",
  appId: "1:1078501247860:web:289309d7931ec297c23a21",
  measurementId: "G-TZK1WR4T41"
};
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db=getFirestore()