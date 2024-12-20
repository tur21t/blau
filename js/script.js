// Carousell for users reviews
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

//form's submit action to make a request to backend
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

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
