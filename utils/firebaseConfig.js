import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdFHy63-_Pk6egfCOb1hGBdAEPs758VVQ",
  authDomain: "mcqtestapp-a1465.firebaseapp.com",
  projectId: "mcqtestapp-a1465",
  storageBucket: "mcqtestapp-a1465.firebasestorage.app",
  messagingSenderId: "771072548401",
  appId: "1:771072548401:web:963165f4a357a7b9d63f10"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
