// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    // signInWithPopup,
    // GoogleAuthProvider,
    // sendEmailVerification,
    // signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSmWZLfzVjeFAHVEvgTGOVb6flpR634xU",
    authDomain: "chatapp-e6b54.firebaseapp.com",
    projectId: "chatapp-e6b54",
    storageBucket: "chatapp-e6b54.appspot.com",
    messagingSenderId: "530037692466",
    appId: "1:530037692466:web:68336e4e460ad711c4442b",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const provider = new GoogleAuthProvider();



const signU = () => {
    let email = emailin.value;
    let password = passwordin.value;
    let identity = nam.value
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = identity
        console.log(user);
        window.location.href = "index.html";
      })
    //   .catch((error) => {
    //     let errorCode = error.code;
    //     console.log(errorCode);
    //     if (errorCode == "auth/email-already-in-use") {
    //       showerr.innerHTML = `<p style="color:yellow; text-align:center;">This email already exists</p>`;
    //       setTimeout(() => {
    //         showerr.style.display = "none";
    //       }, 4000);
    //     } else {
    //       yourOEmail.value = "";
    //       yourOPass.value = "";
    //     }
    //   });
  };
  
  window.signU = signU;