const slider = document.querySelector('.slider');
const imageAfter = document.querySelector('.image-after');
const sliderLine = document.querySelector('.slider-line');
const sliderButton = document.querySelector('.slider-button');

// Update slider position on input
slider.addEventListener('input', (e) => {
  const sliderValue = e.target.value;
  const percentage = `${sliderValue}%`;

  // Update "after" image clip and slider elements
  imageAfter.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;
  sliderLine.style.left = percentage;
  sliderButton.style.left = percentage;
});

// Allow dragging the slider button
let isDragging = false;

sliderButton.addEventListener('mousedown', () => {
  isDragging = true;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const sliderContainer = slider.closest('.slider-container');
    const containerRect = sliderContainer.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const sliderValue = Math.min(Math.max((offsetX / containerRect.width) * 100, 0), 100);

    slider.value = sliderValue;
    const percentage = `${sliderValue}%`;

    // Update "after" image clip and slider elements
    imageAfter.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;
    sliderLine.style.left = percentage;
    sliderButton.style.left = percentage;
  }
});
