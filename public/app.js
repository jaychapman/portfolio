const hamburderBtn = document.getElementById('hamburgerBtn');
const navBar = document.getElementById('navBar');
const navLinks = document.getElementById('mobileNavLinkContainer');
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submit');
const readMore = document.getElementsByClassName('readMore');
const readLess = document.getElementsByClassName('readLess');
const longText = document.getElementsByClassName('longText');


// Navigation toggle events
hamburderBtn.addEventListener('click', () => {
    console.log('button clicked');
    navBar.classList.toggle('open');
    hamburderBtn.classList.toggle('open');
})

navLinks.addEventListener('click', () => {
    console.log('nav link clicked');
    navBar.classList.toggle('open');
    hamburderBtn.classList.toggle('open');
})


// Shows menu when user visits on mobile device
function showNavInit(x) {
    if (x.matches)  navBar.classList.toggle('open');
  }

const x = window.matchMedia("(max-width: 768px)")
showNavInit(x) // Call listener function at run time
x.addEventListener(showNavInit, showNavInit) // Attach listener function on state changes


// About me section - show more text events
readMore[0].addEventListener('click', (event) => {
    console.log('read more clicked');
    readMore[0].style.display="none";
    longText[0].style.display="block";
    readLess[0].style.display="block";
})


readLess[0].addEventListener('click', (event) => {
    console.log('read less clicked');
    readLess[0].style.display="none";
    longText[0].style.display="none";
    readMore[0].style.display="block";
})


// Send contact form to server
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const nameReq = form.formName.value;
    const emailReq = form.formEmail.value;
    const messReq = form.message.value;

    console.log(form.formName.value);
    console.log(form.formEmail.value);
    console.log(form.message.value);

    let mail = new FormData(form);

    if(nameReq ==='' || emailReq==='' || messReq === '') {
        alert('All fields are required');
        showNavInit();
        window.location.reload('/#contact');
    }else {
        //test
        fetch("/send", {
            method: "POST",
            body: mail
        }).then((response) => response.json());


        // keep this
        function success() {
            setTimeout(function(){window.location.href='/thankyou';}, 500);
          }
          success();
    }
})








