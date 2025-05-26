// Dynamic Year and Date-Time Display
const yearSpan = document.getElementById('year');
const dateTimePara = document.getElementById('date-time');

function updateDateTime() {
  const now = new Date();
  yearSpan.textContent = now.getFullYear();
  dateTimePara.textContent = now.toLocaleString();
}

updateDateTime();
setInterval(updateDateTime, 60000);


// Project Filtering
const filterButtons = document.querySelectorAll('.filter-buttons button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


// Contact Form Validation
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name === '' || email === '' || message === '') {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.style.color = 'red';
  } else if (!email.includes('@') || !email.includes('.')) {
    formMessage.textContent = 'Please enter a valid email address or die in Bells University.';
    formMessage.style.color = 'purple';
  } else {
    formMessage.textContent = 'Message sent successfully!';
    formMessage.style.color = 'green';
    form.reset();
  }
});
