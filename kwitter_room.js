
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCvg-75budaGTHgaoX1hinkYpqUMhABtaM",
      authDomain: "class-test-89130.firebaseapp.com",
      databaseURL: "https://class-test-89130.firebaseio.com",
      projectId: "class-test-89130",
      storageBucket: "class-test-89130.appspot.com",
      messagingSenderId: "901832687647",
      appId: "1:901832687647:web:bfc53cdcd835400c5dd52a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name +"!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

       Room_names = childKey;
      //Start code
console.log("room_name= "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function Logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
          }
  