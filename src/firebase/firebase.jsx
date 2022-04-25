import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBfKE0b5twmPHlpr9CrI02pA9E5ORvNt50",
    authDomain: "brewsy-9c9b9.firebaseapp.com",
    projectId: "brewsy-9c9b9",
    storageBucket: "brewsy-9c9b9.appspot.com",
    messagingSenderId: "63815940976",
    appId: "1:63815940976:web:f2685f1751b388e306edb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)