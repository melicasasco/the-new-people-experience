// Initialize Firebase

/* import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDSjJHjU0YPUoOXOqeqVEttqqK7PwCF1aA",
    authDomain: "the-new-people-experience.firebaseapp.com",
    databaseURL: "https://the-new-people-experience-default-rtdb.firebaseio.com",
    projectId: "the-new-people-experience",
    storageBucket: "the-new-people-experience.appspot.com",
    messagingSenderId: "78968268311",
    appId: "1:78968268311:web:3828a04c83086d51e45e52"
  };
   */
// Initialize Firebase
//const app = initializeApp(firebaseConfig);

  // Reference messages collection
  //var messagesRef = firebase.database().ref('messages');

// Submit form

function miForm(){
    var formulario = document.getElementById("contactForm");
    var name = formulario.elements.nombre.value;
    var empresa = formulario.elements.empresa.value;
    var campania = formulario.elements.campania.value;
    var email = formulario.elements.email.value;
    console.log(name, empresa, campania, email)
}




/* function submitForm(e){
    e.preventDefault();
  
    //Get value
    var name = getInputVal('name');
    var empresa = getInputVal('empresa');
    var email = getInputVal('email')
    var campania = getInputVal('campania');

    // Save message
    saveMessage(name, empresa, email, campania);
    console.log(saveMessage) */
    // Show alert
    //document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
/*     setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000); */
  
    // Clear form
   // document.getElementById('contactForm').reset();
  //}
  
  // Function to get form value
/*   function getInputVal(id){
    return document.getElementById(id).value;
  } */
  
  // Save message to firebase
/*   function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      empresa: empresa,
      email: email,
      phone: phone,
      message: message
    });
  } */
   