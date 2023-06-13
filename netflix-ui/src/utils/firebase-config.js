import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCLAOxNX8rVe9zl6-OCxnn0Exxj6sNjs1A",
  authDomain: "react-netflix-clone-bf624.firebaseapp.com",
  projectId: "react-netflix-clone-bf624",
  storageBucket: "react-netflix-clone-bf624.appspot.com",
  messagingSenderId: "676311120089",
  appId: "1:676311120089:web:d5b754d27b6ce4a5e066c8",
  measurementId: "G-3FY5X4GCXS"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
