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
  // Get the form element
  const form = document.getElementById('contact-form');

  // Listen for form submission
  form.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form data
    const name = document.getElementById('contact-form-name').value;
    const email = document.getElementById('contact-form-email').value;
    const phone = document.getElementById('contact-form-phone').value;
    const location = document.getElementById('contact-form-location').value;
    const rooms = document.getElementById('rooms').value;
    const permission =
      document.querySelector('input[name="permission"]:checked')
        ?.nextElementSibling.textContent || null;
    const comment = document.getElementById('comment').value.trim();

    // Create the JSON object
    const formData = {
      name: name,
      email: email,
      phone: phone,
      location: location,
      rooms: rooms,
      permission: permission,
      comment: comment,
    };

    // Log the JSON object to the console
    console.log(JSON.stringify(formData));
  });
});
