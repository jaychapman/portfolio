const hamburderBtn = document.getElementById('hamburgerBtn');
const navBar = document.getElementById('navBar');
const navLinks = document.getElementById('mobileNavLinkContainer');
const closeBtn = document.getElementById('closeBtn');
const form = document.getElementById('contactForm');


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
    if (x.matches) { // If media query matches
        navBar.classList.toggle('open');
    }
  }

const x = window.matchMedia("(max-width: 768px)")
showNavInit(x) // Call listener function at run time
x.addEventListener(showNavInit) // Attach listener function on state changes


const formEvent = form.addEventListener('submitBtn', (event) => {
    event.preventDefault();

    let mail = new FormData(form);

    Sendmail(mail);
});

const sendmail = (mail) => {
    fetch("https://stormy-fortress-18043.herokuapp.com/send", {
        method: "post",
        body: mail,
    }).then((response) => {
        return response.json();
    });
};




