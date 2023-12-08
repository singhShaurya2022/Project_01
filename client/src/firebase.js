import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-a4f67.firebaseapp.com",
  projectId: "mern-project-a4f67",
  storageBucket: "mern-project-a4f67.appspot.com",
  messagingSenderId: "177752233064",
  appId: "1:177752233064:web:487afb3f525435544297dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);