import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAycH3I0GzoKvRyesm16yDR14y9_Iox2jM",
  authDomain: "weathendar-e8c01.firebaseapp.com",
  projectId: "weathendar-e8c01",
  storageBucket: "weathendar-e8c01.firebasestorage.app",
  messagingSenderId: "1046531375083",
  appId: "1:1046531375083:web:9768a2e67485afb91223ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getFirestore(app);
export const analytics = () => getAnalytics(app);

export default app;