// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfGazdQYgYdZqfU_pQLCI_AfA_oRgjoJU",
  authDomain: "brand-shop-958f5.firebaseapp.com",
  projectId: "brand-shop-958f5",
  storageBucket: "brand-shop-958f5.appspot.com",
  messagingSenderId: "679679471321",
  appId: "1:679679471321:web:4045bb26d4b9b56e2058c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);