// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_YTVZaNfaOwechBfpx98WzaQTHPSWcEw",
  authDomain: "mrcfly-c3dad.firebaseapp.com",
  projectId: "mrcfly-c3dad",
  storageBucket: "mrcfly-c3dad.firebasestorage.app",
  messagingSenderId: "78234700286",
  appId: "1:78234700286:web:f6ab191f1a89b7ebc758af",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
