const firebaseConfig = {
    apiKey: "AIzaSyAzuxSgZUKjfP9LdA7nay8zDlqb4_gPGSA",
    authDomain: "goitopplus.firebaseapp.com",
    databaseURL: "https://goitopplus.firebaseio.com",
    projectId: "goitopplus",
    storageBucket: "goitopplus.appspot.com",
    messagingSenderId: "444598945698",
    appId: "1:444598945698:web:73a79c94602f5215"
  };
  
  let firebaseInstance
  export const getFirebase = firebase => {
    if (firebaseInstance) {
      return firebaseInstance
    }
  
    firebase.initializeApp(firebaseConfig)
    firebaseInstance = firebase
  
    return firebase
  }