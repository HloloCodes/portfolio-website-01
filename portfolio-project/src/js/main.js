// Initialize Typed.js
var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Developer", "Fashion Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Set the image path
const imagePath = '/assets/images/1.png';

// Dynamically add an image to the page
const imageElement = document.createElement("img");
imageElement.src = imagePath;
imageElement.alt = "Portfolio Image"; // Alt text for accessibility
document.querySelector(".image-container").appendChild(imageElement);


window.onload = function () {
  const percentage = 89; // Percentage to be displayed
  const circle = document.querySelector('.path-1');
  const percentageText = document.querySelector('.percentage');
  const circleLength = 502; // Circumference of the circle (2 * π * radius)

  const offset = circleLength - (circleLength * (percentage / 100));
  circle.style.strokeDashoffset = offset;
  
  percentageText.textContent = `${percentage}%`;
};




