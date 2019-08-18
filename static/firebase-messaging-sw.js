importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyAzuxSgZUKjfP9LdA7nay8zDlqb4_gPGSA",
    authDomain: "goitopplus.firebaseapp.com",
    databaseURL: "https://goitopplus.firebaseio.com",
    projectId: "goitopplus",
    storageBucket: "goitopplus.appspot.com",
    messagingSenderId: "444598945698",
    appId: "1:444598945698:web:73a79c94602f5215"
  };
  

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();