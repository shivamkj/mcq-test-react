import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgxm612M00tlw7t-ENKBQ00e8lmvNYbEY",
  authDomain: "mcqtest-8c924.firebaseapp.com",
  projectId: "mcqtest-8c924",
  storageBucket: "mcqtest-8c924.firebasestorage.app",
  messagingSenderId: "367636037562",
  appId: "1:367636037562:web:87ad36de779922c411e783",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
