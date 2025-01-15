// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase Configuration for your web app
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCB12ehgtXT69L6Waa2vC_jctt1Zav7_xg",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "blog-app-5bb5d.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "blog-app-5bb5d",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "blog-app-5bb5d.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID || "36279098735",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:36279098735:web:c51f11f3514e7a269adc9a",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-G38QVXDC02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics if running in browser
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Set up Firebase Authentication and Firestore
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, provider, db, analytics };
