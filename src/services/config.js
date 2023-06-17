import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: "ecommerce-proyecto-final-c6d12.firebaseapp.com",
    projectId: "ecommerce-proyecto-final-c6d12",
    storageBucket: "ecommerce-proyecto-final-c6d12.appspot.com",
    messagingSenderId: "821736702900",
    appId: "1:821736702900:web:d87e644583496c147f28e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);