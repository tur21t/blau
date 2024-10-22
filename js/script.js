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

//orm's submit action to make a request to an backend
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById('contact-form-name').value,
    email: document.getElementById('contact-form-email').value,
    phone: document.getElementById('contact-form-phone').value,
    location: document.getElementById('contact-form-location').value,
    comment: document.getElementById('comment').value,
  };

  fetch('/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.text())
    .then((data) => {
      alert('Message sent successfully');
    })
    .catch((error) => {
      alert('Error sending message');
    });
});
