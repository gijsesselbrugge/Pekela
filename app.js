// Select the slider and the image container
const slider = document.querySelector('.slider');
const imageAfter = document.querySelector('.image-after');
const sliderLine = document.querySelector('.slider-line');
const sliderButton = document.querySelector('.slider-button');

// Update the slider position on input
slider.addEventListener('input', (e) => {
  const sliderValue = e.target.value; // Get the slider's value (0-100)
  const percentage = `${sliderValue}%`;

  // Update the visible area of the after image
  imageAfter.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;

  // Move the slider line and button
  sliderLine.style.left = percentage;
  sliderButton.style.left = percentage;
});
