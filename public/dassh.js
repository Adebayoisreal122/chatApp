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
        userName.innerHTML = `
      <p class="m-auto">${maily}</p>
      `;
    } else {
      userName.innerHTML = `
      <p class="m-auto">${Cname}</p>
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
  

  const displayChat = document.getElementById('displayChat');
const scrollToBottom = () => {
  displayChat.scrollBottom = displayChat.scrollHeight;
};


const submitData = () => {
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  let chatHr = chatH.value;
  onAuthStateChanged(auth, (user) => {
    let userName = user.displayName;
    let photo = user.photoURL;
    let email = user.email;
    if (chatHr.trim() !== "") {
      if (userName != null && photo != null){
        chatH.value = "";
        let chatObj = {
          photo,
          userName,
          chatHr,
          date,
          time,
        };
        let dbRef = ref(database, `chatMessages`);
        set(dbRef, chatObj);
      }else{
        chatH.value = "";
        let chatObj = {
          email,
          chatHr,
          date,
          time,
        };
        let dbRef = ref(database, `chatMessages`);
        set(dbRef, chatObj);
      }

      // let filename = myFile.files[0].name;
      // let uploadedFile = myFile.files[0];
      // let stref = storageRef(
      //   storage,
      //   `Uploaded/${todoObj.userName}/${filename}`
      // );
      // let doneStoring = uploadBytesResumable(storageRef, uploadedFile);
      // doneStoring.on("state_changed", (snapshot) => {
      //   let progress = snapshot.bytesTransferred;
      //   let total = snapshot.totalBytes;
      //   const showProgress = ((progress / total) * 100).toFixed(2);
      //   console.log(showProgress);
      // });
    }
  });
  scrollToBottom()
};
window.submitData = submitData

const chatRef = ref(database, 'chatMessages');
onValue(chatRef, (snapshot) => {
  const chatMessages = snapshot.val();
  console.log(chatMessages);
  onAuthStateChanged(auth, (user)=>{
    console.log(user.displayName);
    const currentUser = user.displayName
    const currentEmail = user.email
    if (chatMessages.userName === currentUser) {
      // Display current user's message on the right
      displayChat.innerHTML += `
      <div class="w75 w-100 float-end">
      <div class="bgprimary text-white w-75 float-end p-2 mb-2 rounded-3 bubble">
      <p class="text-white fw-bold w-100 nameing">${chatMessages.userName}</p>
          <p>${chatMessages.chatHr}</p>
          <small class="float-end fw-bold">${chatMessages.time}</small>
          <img src=${chatMessages.photo} style="border-radius: 100%;"  class="minus1" title="profile picture"/>  
          </div>

      </div>
      `;
    }else if (chatMessages.email == currentEmail){
      displayChat.innerHTML += `
      <div class="w75 w-100 float-end">
      <div class="bgprimary text-white w-75 float-end p-2 mb-2 rounded-3 bubble">
      <p class="text-white fw-bold w-100 nameing">${chatMessages.email}</p>
          <p>${chatMessages.chatHr}</p>
          <small class="float-end fw-bold">${chatMessages.time}</small>
          </div>
      </div>
      `;
    }else if(chatMessages.userName == undefined){
       // Display other users' messages on the left
       displayChat.innerHTML += `
       <div class="w75 w-100 float-start">
       <div class="bg-light text-black w-75 float-start p-2 mb-2 rounded-3 bubble bgprimary1">
       <p class="text-danger fw-bold w-100">${chatMessages.email}</p>
           <p>${chatMessages.chatHr}</p>
           <small class="float-start fw-bold text-black">${chatMessages.time}</small>
           <img src=${chatMessages.photo} style="border-radius: 100%;"  class="minus2" title="profile picture"/>  
         </div>
       </div>
       `;
    }
     else {
      // Display other users' messages on the left
      displayChat.innerHTML += `
      <div class="w75 w-75 float-start">
      <div class="bg-light text-black w-75 float-start p-2 mb-2 rounded-3 bubble bgprimary1">
      <p class="text-danger fw-bold w-100">${chatMessages.userName}</p>
          <p>${chatMessages.chatHr}</p>
          <small class="float-start fw-bold text-black">${chatMessages.time}</small>
          <img src=${chatMessages.photo} style="border-radius: 100%;"  class="minus2" title="profile picture"/>  
        </div>
      </div>
      `;
    }
  })
 
  
});
