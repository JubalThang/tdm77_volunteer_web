// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { enableIndexedDbPersistence, getFirestore } from "firebase/firestore";

// incase need storage
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "bible-entery-vol-web-app.firebaseapp.com",
    projectId: "bible-entery-vol-web-app",
    storageBucket: "bible-entery-vol-web-app.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore(app)


// enable DB Persistence 
enableIndexedDbPersistence(db)

// storage
export const storage = getStorage(app)