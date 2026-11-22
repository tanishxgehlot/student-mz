// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyApTPjTpFsk1YpYiY4TMsIpkhJp8Hh91qA",
  authDomain: "student-mz.firebaseapp.com",
  projectId: "student-mz",
  storageBucket: "student-mz.firebasestorage.app",
  messagingSenderId: "964800248028",
  appId: "1:964800248028:web:98cb7fa271aa919c989c19"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);