import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC2IiG_VDKQqgSnPzFaJwAl4LIfV4xLhc8",
    authDomain: "chat-e1e22.firebaseapp.com",
    projectId: "chat-e1e22",
    storageBucket: "chat-e1e22.firebasestorage.app",
    messagingSenderId: "602081271124",
    appId: "1:602081271124:web:6bb2a27e4be88604253cc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()

export const db = getFirestore(app)