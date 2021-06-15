
//ADD YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBjpku69vMQoUnaWSpMseFRIiDgS-9m2p4",
    authDomain: "kwitter-1-2649d.firebaseapp.com",
    databaseURL: "https://kwitter-1-2649d-default-rtdb.firebaseio.com",
    projectId: "kwitter-1-2649d",
    storageBucket: "kwitter-1-2649d.appspot.com",
    messagingSenderId: "931244706902",
    appId: "1:931244706902:web:573eebf5e6efa6275c3ff7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser() { 
      user_name = document.getElementById("user_name").value;
       firebase.database().ref("/").child(user_name).update({ 
           purpose : "adding user" }); 
        }
