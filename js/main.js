// MENU SHOWS
// const showMenu = (toggleId, navId) =>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)

    // if(toggle && nav){
    //     toggle.addEventListener('click', ()=>{
    //         nav.classList.toggle('show')
    //     })
    // }
// }
// showMenu('nav-toggle','nav-menu')

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')
// MENU SHOW
// Validate if constant exists
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add("show") 
    })
}
// MENU HIDDEN
// Validate is constant exists
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show')
    })
}

// ACTIVE AND REMOVE MENU
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    //Active Link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    // Remove Menu Mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

// QUALIFICATION TABS
const tabs = document.querySelectorAll('[data-target'),
tabContents = document.querySelectorAll('[data-content')
tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)  
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tab.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})
// const tabs = document.querySelectorAll('[data-target')
const lol = document.querySelectorAll('.qualification__button');
function linkActive(){
    //Active Link
    lol.forEach(n => n.classList.remove('active-link'));
    this.classList.add('active-link');
}
lol.forEach(n => n.addEventListener('click',linkActive))
// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// SCROLL HOME
sr.reveal('.home__title', {})
sr.reveal('.button', {delay:200})
sr.reveal('.home__img', {delay:400})
sr.reveal('.home__social-icon', {interval:200})

// SCROLL ABOUT
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {delay:200})
sr.reveal('.about__text', {delay:400})

// SCROLL QUALIFICATION
// sr.reveal('.qualification__subtitle', {})
sr.reveal('.qualification__container', {delay:200})
// sr.reveal('.qualification__title', {delay:400})
// sr.reveal('.qualification__subtitle', {delay:600})
// sr.reveal('.qualification__calendar', {delay:800})
// SCROLL SKILLS
sr.reveal('.askills__subtitle', {})
sr.reveal('.skills__text', {delay:200})
sr.reveal('.skills__data', {interval:200})
sr.reveal('.skills__img', {delay:400})

// SCROLL WORK
sr.reveal('.work__img', {interval:200})

// SCROLL CONTACT
sr.reveal('contact__input', {interval:200})

// TYPING ANIMATION SCRIPT
var typed = new Typed(".typing",{
    strings:["Computer Engineer", "Coding Enthusiast", "Comedian"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    if(document.body.classList.contains('dark-theme')){
        changeImage('img/Vectorhellolol.png');
    }
    else{
        changeImage('img/Vector.png')
    }
})
// Change the image as per the theme
let img = document.getElementById('myImage')
function changeImage(a){
    img.src = a;
}


let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    keyboard: true,
  });

  let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    scroll: true,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets: true
    },
    keyboard: true,
    breakpoints:{
        568:{
            sliderPerView: 2
        }
    }
  });

//   const form = document.getElementById('form');
//   const name = document.getElementById('name');
//   const email = document.getElementById('email');
//   const message = document.getElementById('message');
//   form.addEventListener('submit', (e)=>{
//       e.preventDefault();
//       checkInputs();
//   });
//   function checkInputs() {
//     //   get values of inputs
//     const nameValue = name.value.trim();
//     const emailValue = email.value.trim();
//     const messageValue = message.value.trim();

//     if(messageValue === ''){
//         // show error
//         // add error class
//         setErrorFor(message, "Message cannot be blank");
//     }else{
//         // add success class
//         setSuccessFor(message);
//     }
//     if(nameValue === ''){
//         // show error
//         // add error class
//         setErrorFor(message, "Name cannot be blank");
//     }else{
//         // add success class
//         setSuccessFor(message);
//     }
//   }

//   function setErrorFor(input, displayMessage){
//       const formControl = input.parentElement;
//       const small = formControl.querySelector('small');
//       small.innerText = displayMessage;
//       formControl.className = 'form-control error';
//   }