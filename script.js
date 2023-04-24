// Form Submission

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
  } else {
    alert('Thank you for your message!');
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }
});

// Slider

const sliderImages = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

function slideLeft() {
  reset();
  sliderImages[currentSlide - 1].style.display = 'block';
  currentSlide--;
}

function slideRight() {
  reset();
  sliderImages[currentSlide + 1].style.display = 'block';
  currentSlide++;
}

prevButton.addEventListener('click', () => {
  if (currentSlide === 0) {
    currentSlide = sliderImages.length - 1;
  } else {
    currentSlide--;
  }
  slideLeft();
});

nextButton.addEventListener('click', () => {
  if (currentSlide === sliderImages.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slideRight();
});

startSlide();
