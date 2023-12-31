// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    sendEmailVerification,
    signInWithEmailAndPassword,
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
const provider = new GoogleAuthProvider();

const signG = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      if (user) {
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("Verification email sent!");
        });
        window.location.href = "dashboard.html";
      } else {
        window.location.href = "index.html";
      }
    })
    .catch((error) => {
      let errorCode = error.code;
      console.log(errorCode);
    //   if (errorCode == "auth/account-exists-with-different-credential") {
    //     showerr.innerHTML = `<p style="color:yellow; text-align:center;">A user is already signed in with this account email</p>`;
    //     setTimeout(() => {
    //       showerr.style.display = "none";
    //     }, 3000);
    //   }else if(errorCode == "auth/internal-error") {
    //     showerr.innerHTML = `<p style="color:orange; text-align:center;">you are not connected to the internet</p>`;
    //     setTimeout(() => {
    //       showerr.style.display = "none";
    //     }, 3000);
    //   }
    });
}
window.signG = signG;



const signI = () => {
  // show.innerHTML = `<p>am working </p>`
    let email = yourEmail.value;
    let password = yourPass.value;
    yourEmail.value = "";
    yourPass.value = "";
    if (email == "" || password == "") {
      show.innerHTML = `<p style="color:red; text-align:center;">Email and password cannot be left empty !</p>`;
      setTimeout(() => {
        show.style.display = "none";
      }, 4000);
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        window.location.href ="dashboard.html";
      })
      .catch((error) => {
        let errorCode = error.code;
        console.log(errorCode);
        if (errorCode === "auth/invalid-credential") {
          show.innerHTML = `<p style="color: red; text-align:center;"> you have entered an invalid email and password !</p>`;
          setTimeout(() => {
            show.style.display = "none";
          }, 4000);
        }else if(errorCode === "auth/internal-error" || errorCode == "auth/network-request-failed") {
          show.innerHTML = `<p style="color: red; text-align:center;">you are not connected to the internet !</p>`;
          setTimeout(() => {
            show.style.display = "none";
          }, 4000);
        }
      });
  };
  
  window.signI = signI;




  
  