import { initializeApp } from "firebase/app";
import { getAuth } from  "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import dotenv from "dotenv";

// dotenv.config();

const FIREBASE_API_KEY = "AIzaSyAI90jOqrgi9qKwIE5XsjL3tcDdNjDCTTo"
const FIREBASE_AUTH_DOMAIN = "react-firebase-cross-chat.firebaseapp.com"
const FIREBASE_DATABASE_URL = "http://react-firebase-cross-chat.firebaseio.com"
const FIREBASE_PROJECT_ID = "react-firebase-cross-chat"
const FIREBASE_STORAGE_BUCKET = "react-firebase-cross-chat.appspot.com"
const FIREBASE_MESSAGING_SENDER_ID = "376034174560"
const FIREBASE_APP_ID = "1:376034174560:web:2462d0171cf9bcff860505"

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();