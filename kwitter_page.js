//YOUR FIREBASE LINKS
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
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_tag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row=name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
console.log("click on the button-"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
update_likes=Number(likes)+1;
console.log(update_likes);
firebase.database().ref(room_name).child(message_id).update({
      like:update_likes
});
}
function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}