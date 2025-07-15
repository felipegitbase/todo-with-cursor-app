// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 👇 Pega aquí tu config de Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Debug: Log the config to see what values are being used
console.log("Firebase Config:", {
  apiKey: firebaseConfig.apiKey ? "✓ Set" : "✗ Missing",
  authDomain: firebaseConfig.authDomain ? "✓ Set" : "✗ Missing", 
  projectId: firebaseConfig.projectId ? "✓ Set" : "✗ Missing",
  storageBucket: firebaseConfig.storageBucket ? "✓ Set" : "✗ Missing",
  messagingSenderId: firebaseConfig.messagingSenderId ? "✓ Set" : "✗ Missing",
  appId: firebaseConfig.appId ? "✓ Set" : "✗ Missing"
});

console.log("Project ID:", firebaseConfig.projectId);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
