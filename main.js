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

/* SCROLL HOME */
sr.reveal('.info-A',{}); 
sr.reveal('.info-B',{delay: 300}); 
sr.reveal('.info-C',{ interval: 400}); 

/*SCROLL multicampanias
sr.reveal('.multicampanias__img',{}); 
sr.reveal('.multicampanias__subtitle',{delay: 400}); 
sr.reveal('.multicampanias__text',{delay: 400}); 

/*SCROLL INFO
sr.reveal('.info__img',{interval: 200}); 
sr.reveal('.info__img-destacados',{interval: 200}); 
sr.reveal('.info__img-arreglos',{interval: 200}); */

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

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

// Get the position of the animation section on the page
const animationSection = document.getElementById("animationSection");
const sectionTop = animationSection.offsetTop;
const sectionBottom = sectionTop + animationSection.offsetHeight;

// Listen for the 'onscroll' event
window.onscroll = function() {
    console.log("srollllll")
  // Get the current scroll position of the page
  const currentScroll = document.documentElement.scrollTop;

  // Check if the current scroll position is within the animation section
  if (currentScroll >= sectionTop && currentScroll <= sectionBottom) {
    // Trigger the number animations
    animateNumber1();
    animateNumber2();
    animateNumber3();
  }
};
