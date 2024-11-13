// Carousel for users reviews
const scrollContainer = document.getElementById('cards-container');
const scrollAmount = 300; // Customize the scroll distance

document.getElementById('scroll-left').onclick = function () {
  scrollContainer.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth', // Smooth scrolling animation
  });
};

document.getElementById('scroll-right').onclick = function () {
  scrollContainer.scrollBy({
    left: scrollAmount,
    behavior: 'smooth',
  });
};

// Multilingual error messages
const messages = {
  en: {
    required: 'Please fill out your name, email, and phone.',
    invalidEmail: 'Please enter a valid email address.',
  },
  es: {
    required: 'Por favor, rellene su nombre, correo electrónico y teléfono.',
    invalidEmail:
      'Por favor, introduzca una dirección de correo electrónico válida.',
  },
  ca: {
    required: 'Si us plau, ompli el seu nom, correu electrònic i telèfon.',
    invalidEmail:
      'Si us plau, introdueix una adreça de correu electrònic vàlida.',
  },
};

// Function to get the current language
function getLanguage() {
  return document.documentElement.lang || 'en'; // Default to English if no language is set
}

// Validation function
function validateForm() {
  const lang = getLanguage(); // Get the current language
  const name = document.getElementById('contact-form-name').value.trim();
  const email = document.getElementById('contact-form-email').value.trim();
  const phone = document.getElementById('contact-form-phone').value.trim();

  if (!name || !email || !phone) {
    alert(messages[lang].required);
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert(messages[lang].invalidEmail);
    return false;
  }

  return true;
}

// Form's submit action to make a request to backend
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate the form
    if (!validateForm()) {
      return; // Stop form submission if validation fails
    }

    // Prepare form data for EmailJS
    const params = {
      name: document.getElementById('contact-form-name').value,
      email: document.getElementById('contact-form-email').value,
      phone: document.getElementById('contact-form-phone').value,
      location: document.getElementById('contact-form-location').value,
      rooms: document.getElementById('rooms').value,
      permission:
        document.querySelector('input[name="permission"]:checked')?.value || '',
      comment: document.getElementById('comment').value.trim(),
    };

    // Sending the email using EmailJS
    emailjs.send('service_2mazvr7', 'template_g52izg9', params).then(
      function (response) {
        alert('Thank you for your message! We will contact you soon');
        console.log('Email sent successfully:', response.status, response.text);
      },
      function (error) {
        alert('An error occurred. Please try again.');
        console.error('Failed to send email:', error);
      }
    );
  });
});
