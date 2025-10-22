import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDaj9cIQuXEt3MIVhCchX9y2a7riRWnAyA",
  authDomain: "runvai.firebaseapp.com",
  projectId: "runvai",
  storageBucket: "runvai.firebasestorage.app",
  messagingSenderId: "573867902727",
  appId: "1:573867902727:web:58259b5139be5e0aaf67a2"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
