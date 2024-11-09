import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIuWiguQuycR1f6tod2eRhXD10Jobn8Go",
  authDomain: "discord-clone-udemy-8afb1.firebaseapp.com",
  projectId: "discord-clone-udemy-8afb1",
  storageBucket: "discord-clone-udemy-8afb1.firebasestorage.app",
  messagingSenderId: "447929607000",
  appId: "1:447929607000:web:6623d8c8ef987b08113b2d",
  measurementId: "G-ECJGLM4VTH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const analytics = getAnalytics(app);

export { auth, provider, db };