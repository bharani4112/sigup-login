// your JavaScript should be here, kept as before
// Tab switching
document.getElementById('login-tab').addEventListener('click', () => {
  document.getElementById('login-tab').classList.add('active');
  document.getElementById('signup-tab').classList.remove('active');
  document.getElementById('login-panel').classList.add('active');
  document.getElementById('signup-panel').classList.remove('active');
});
document.getElementById('signup-tab').addEventListener('click', () => {
  document.getElementById('signup-tab').classList.add('active');
  document.getElementById('login-tab').classList.remove('active');
  document.getElementById('signup-panel').classList.add('active');
  document.getElementById('login-panel').classList.remove('active');
});
// Toggle password
function togglePass(id, el) {
  const input = document.getElementById(id);
  if(input.type === 'password') {
    input.type = 'text';
    el.classList.remove('bi-eye-slash');
    el.classList.add('bi-eye');
  } else {
    input.type = 'password';
    el.classList.remove('bi-eye');
    el.classList.add('bi-eye-slash');
  }
}
// Typed.js
var Typed = new Typed(".typing", {
  strings: ["Welcome to My page"],
  typeSpeed: 150,
  backSpeed: 50,
  cursorChar: "|",
  shuffle: true,
  smartBackspace: true,
  backDelay: 1000,
  loop: true
});
// particles.js
particlesJS("particles-js", {
  "particles": {
    "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
    "color": {"value": "#ffffff"},
    "shape": {"type": "circle"},
    "opacity": {"value": 0.5},
    "size": {"value": 3, "random": true},
    "line_linked": {"enable": true, "distance": 150, "color": "#00c6ff", "opacity": 0.4, "width": 1},
    "move": {"enable": true, "speed": 2}
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {"enable": true, "mode": "repulse"},
      "onclick": {"enable": true, "mode": "push"},
      "resize": true
    },
    "modes": {
      "grab": {"distance": 200, "line_linked": {"opacity": 1}},
      "push": {"particles_nb": 4}
    }
  },
  "retina_detect": true
});
// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('i');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if(document.body.classList.contains('light-mode')) {
    icon.classList.remove('bi-moon');
    icon.classList.add('bi-sun');
  } else {
    icon.classList.remove('bi-sun');
    icon.classList.add('bi-moon');
  }
});