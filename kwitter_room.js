
const firebaseConfig = {
      apiKey: "AIzaSyCAdqrUQSMl63iUH7m76Eoh5O_oqEcSVqY",
      authDomain: "kwitter-f98bf.firebaseapp.com",
      databaseURL: "https://kwitter-f98bf-default-rtdb.firebaseio.com",
      projectId: "kwitter-f98bf",
      storageBucket: "kwitter-f98bf.appspot.com",
      messagingSenderId: "549881428989",
      appId: "1:549881428989:web:576d53b2304c6c19593794"
    };
    
    
    firebase.initializeApp(Config);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
