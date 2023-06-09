
//popup

var popup = document.getElementById("popup");


 function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
} 

//FORM
import { addUser } from './firebase.js';


function miForm(event) {
    event.preventDefault();
  
    var formulario = document.getElementById("contactForm");
    var nombre = formulario.elements.nombre.value;
    var empresa = formulario.elements.empresa.value;
    var campania = formulario.elements.campania.value;
    var email = formulario.elements.email.value;
  
    // Validar si los campos están completados
    if (nombre === "" || empresa === "" || campania === "" || email === "") {
      return;
    }
    
    var user = {
      name: nombre,
      empresa: empresa,
      campania: campania,
      email: email
    };
  
    addUser(user);
    openPopup();
    console.log("form enviado");
    formulario.reset();
  }
  
/* function miForm(event){
    event.preventDefault();
    var formulario = document.getElementById("contactForm");
    var user = {
        name: formulario.elements.nombre.value,
        empresa: formulario.elements.empresa.value,
        campania: formulario.elements.campania.value,
        email: formulario.elements.email.value
    }
    addUser(user)
    if (user == '') {
        console.log('llenar campos')
    } else {
        openPopup(); 
        console.log("form enviado")

        contactForm.reset();
    }
    console.log(user)
} */

var formulario = document.getElementById("contactForm");
formulario.addEventListener("submit", miForm);



/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
});

/* SCROLL TENDENCIAS */
sr.reveal('.info-A',{ }); 
sr.reveal('.info-B',{delay: 300}); 
sr.reveal('.info-C',{ interval: 400}); 

//SCROLL multicampanias
sr.reveal('.multicampanias__img',{}); 


//number animations

let number1 = 0;
const target1 = 100;
const duration1 = 1000; // milliseconds
const stepTime1 = duration1 / target1;

function animateNumber1() {
    const element = document.getElementById("number1");
    element.innerHTML = number1.toFixed(0);

    if (number1 < target1) {
        number1++;
        setTimeout(animateNumber1, stepTime1);
    }
}

let number2 = 0;
const target2 = 150;
const duration2 = 1000; // milliseconds
const stepTime2 = duration2 / target2;

function animateNumber2() {
    const element = document.getElementById("number2");
    element.innerHTML = number2.toFixed(0);

    if (number2 < target2) {
        number2++;
        setTimeout(animateNumber2, stepTime2);
    }
}

let number3 = 0;
const target3 = 90;
const duration3 = 1000; // milliseconds
const stepTime3 = duration3 / target3;

function animateNumber3() {
    const element = document.getElementById("number3");
    element.innerHTML = number3.toFixed(0);

    if (number3 < target3) {
        number3++;
        setTimeout(animateNumber3, stepTime3);
    }
}

animateNumber1();
animateNumber2();
animateNumber3();


//prueba btn

