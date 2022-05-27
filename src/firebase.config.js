// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnS34KHCpkHWFB7M1mKwvHOrs8HCToJn4",
  authDomain: "house-marketplace-app-57cb0.firebaseapp.com",
  projectId: "house-marketplace-app-57cb0",
  storageBucket: "house-marketplace-app-57cb0.appspot.com",
  messagingSenderId: "824975893500",
  appId: "1:824975893500:web:e2df1556c74361de578879"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()