import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";  
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

//add your credentials from firebase project
const firebaseConfig = {
    apiKey: "AIzaSyDSjJHjU0YPUoOXOqeqVEttqqK7PwCF1aA",
    authDomain: "the-new-people-experience.firebaseapp.com",
    databaseURL: "https://the-new-people-experience-default-rtdb.firebaseio.com",
    projectId: "the-new-people-experience",
    storageBucket: "the-new-people-experience.appspot.com",
    messagingSenderId: "78968268311",
    appId: "1:78968268311:web:3828a04c83086d51e45e52"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore();


// Add a new document with a generated id.
export const addUser = (user) => { 
    addDoc(collection(db, "users"), {
        empresa: user.empresa,
        campania: user.campania,
        name: user.name,
        email: user.email,
  });
}