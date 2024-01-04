// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
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



onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      let Cname = user.displayName;
      let maily = user.email;
      let dispImg = user.photoURL;
  
      if (Cname == null && dispImg == null) {
        display.innerHTML = `
      <h3>${maily}</h3>
      <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/exit.png" alt="exit" onclick="xignOut()" />
      
      `;
    } else {
      display.innerHTML = `
      <h3>${Cname}</h3>
      <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/exit.png" alt="exit" onclick="signOut()" />
      
      
      `;
      userImage.innerHTML = `
      <img src=${dispImg} style="border-radius: 100%; width: 28px; height:28px"  class="minus" title="profile picture"/>
      `
      }
    } else {
      window.location.href = "index.html";
    }
  });




const signO = () => {
    signOut(auth)
      .then(() => {
        console.log("out with you");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  window.signO = signO;
  