const navbar = document.querySelector('#navbar');
const main = document.querySelector('#main');

if (navbar) {
  navbar.style.height = window.innerHeight * 0.1 + "px";
  navbar.style.width = window.innerWidth * 0.9 + "px";
}

const getNavbarHeight = () => {
  if (navbar) {
    return navbar.clientHeight;
  } else {
    return 0;
  }
}

main.style.height = window.innerHeight - getNavbarHeight() + "px";

const createAlert = (title, message, initial = false) => {
  document.querySelector('#alert-title').innerHTML = title;
  document.querySelector('#alert-desc').innerHTML = message;
  if (initial) {
    $('#alertBox').append(`<button id="#dontShow" class="wide-text" onclick="dontShowAgain()">Don't Show This Again</button>`)
  }
  $('#alertBox').fadeIn();
}

const closeAlert = () => {
  $('#dontShow').remove();
  $('#alertBox').fadeOut();
}

window.addEventListener('resize', () => {
  if (navbar) {
    navbar.style.height = window.innerHeight * 0.1 + "px";
  }
    
  main.style.height = window.innerHeight - getNavbarHeight() + "px";
});