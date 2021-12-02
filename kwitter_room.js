var firebaseConfig = {
      apiKey: "AIzaSyAxFPVjlYzqT2CNx2bDXOB3ssiuksYJYMQ",
      authDomain: "kwitter-cbcd5.firebaseapp.com",
      databaseURL: "https://kwitter-cbcd5-default-rtdb.firebaseio.com",
      projectId: "kwitter-cbcd5",
      storageBucket: "kwitter-cbcd5.appspot.com",
      messagingSenderId: "19029784811",
      appId: "1:19029784811:web:5db87d806b38ce381666ae",
      measurementId: "G-NXSPQ61T9C"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
addroom()
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
//End code
});});}
getData();