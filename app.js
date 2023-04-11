// Smooth scrolling functionality
const navLinks = document.querySelectorAll('nav ul li a');

for (const link of navLinks) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop - 70,
    behavior: "smooth"
  });
}

// Form submission handling
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', submitHandler);

function submitHandler(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');


  alert(`Thank you, ${name}! Your message has been sent.`);

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
}
