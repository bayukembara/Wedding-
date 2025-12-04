import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // ADD THIS
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCW7U9vBC6_yu3zaoVw7lk5xBSNlhxWPiI",
    authDomain: "wedding-1e20c.firebaseapp.com",
    projectId: "wedding-1e20c",
    storageBucket: "wedding-1e20c.firebasestorage.app",
    messagingSenderId: "1024316493220",
    appId: "1:1024316493220:web:6bf6281ccc794d4ec88531",
    measurementId: "G-FXDVM279PF",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const rtdb = getDatabase(app); // ADD THIS
