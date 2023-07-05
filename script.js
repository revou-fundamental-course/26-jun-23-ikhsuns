// JavaScript code for auto-sliding banner
const bannerImages = ['img/banner1.jpg', 'img/banner2.jpg', 'img/banner3.jpg'];
let currentImageIndex = 0;

function changeBannerImage() {
  const banner = document.getElementById('home');
  banner.style.backgroundImage = `url(${bannerImages[currentImageIndex]})`;
  
  currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
}

setInterval(changeBannerImage, 3000);

const packagesHeaders = document.querySelectorAll('.packages-header');

  let currentSlide = 0;
  let slideInterval;

  function showSlide(slideIndex) {
  packagesHeaders.forEach(header => header.classList.remove('active'));
  packagesHeaders[slideIndex].classList.add('active');
  }

  function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve form inputs
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const interestInput = document.getElementById('interest');

  // Validate name (required)
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  // Validate email (required and valid format)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === '') {
    alert('Please enter your email address.');
    emailInput.focus();
    return;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }

  // Validate phone number (required and numeric)
  const phonePattern = /^\d+$/;
  if (phoneInput.value.trim() === '') {
    alert('Please enter your phone number.');
    phoneInput.focus();
    return;
  } else if (!phonePattern.test(phoneInput.value.trim())) {
    alert('Please enter a valid phone number.');
    phoneInput.focus();
    return;
  }

  // Validate interest (required)
  if (interestInput.value === '') {
    alert('Please select an interest.');
    interestInput.focus();
    return;
  }

  // If all validations pass, submit the form
  alert('Form submitted successfully!');
  document.getElementById('contactForm').reset(); // Reset form fields
}

  function nextSlide() {
  currentSlide++;
  if (currentSlide >= packagesHeaders.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
  }

  function showSlides() {
  packagesHeaders.forEach((header, index) => {
    setTimeout(() => {
      header.classList.add('active');
    }, index * 1000); // Adjust the duration (1000ms = 1 second) to control the delay between each slide appearance
  });
}

// Show all slides once the page loads
window.addEventListener('load', showSlides);

  // Change slide every 7 seconds
  slideInterval = setInterval(nextSlide, 7000)

// JavaScript code for form validation
function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || phone === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Additional validation logic for email, phone, etc.

  // Form is valid, do something with the data (e.g., submit to server)
  // ...

  // Reset the form
  document.getElementById('contactForm').reset();
}
