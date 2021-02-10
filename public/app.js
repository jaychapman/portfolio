const hamburderBtn = document.getElementById('hamburgerBtn');
const navBar = document.getElementById('navBar');
const navLinks = document.getElementById('mobileNavLinkContainer');
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submit');

//const formName = document.getElementById('formName').value;


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

// DONT USE THIS:
// const formEvent = form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log('submit button clicked');
//     let mail = new FormData(form);

//     SendMail(mail);
// });

//THIS WORKED OK:
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    //console.log("that worked!");
    //console.log(formName);
    let mail = new FormData(form);
    sendMail(mail);
    function success() {
        window.location.href="/thankyou";
      }

      success();
})


//TESTING:
// submitBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log("that worked!");
//     console.log(formName);
//     let mail = new FormData(form);
//     sendMail(mail);
// })


// const sendMail = (mail) => {
//     fetch("/send", {
//         method: "POST",
//         body: mail
//     }).then((response) => {
//         return response.json();
//     });
// };



const sendMail = (mail) => {
    fetch("/send", {
        method: "POST",
        body: mail
    }).then((response) => response.json());
};






