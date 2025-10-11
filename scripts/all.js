const navbar = document.querySelector('#navbar');
const main = document.querySelector('#main');

navbar.style.height = window.innerHeight * 0.1 + "px";

main.style.height = window.innerHeight - navbar.clientHeight + "px";

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
  navbar.style.height = window.innerHeight * 0.1 + "px";

  main.style.height = window.innerHeight - navbar.clientHeight + "px";
});