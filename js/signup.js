// js/signup.js
import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const linkedin = document.getElementById("linkedin").value.trim();
  const github = document.getElementById("github").value.trim();

  try {
    // 1. Auth mein user banao
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const uid = cred.user.uid;

    // 2. Firestore mein user ka profile document banao (doc id = uid)
    await setDoc(doc(db, "users", uid), {
      name,
      email,
      linkedin,
      github,
      profileComplete: false,   // popup form ke baad true hoga
      createdAt: serverTimestamp()
    });

    alert("Account ban gaya! Ab home page par jaate hain.");
    window.location.href = "home.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
});