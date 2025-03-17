// Select DOM elements
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const carousel = document.querySelector(".carousel");
const slider = document.querySelector(".carousel .list");
const thumbnailContainer = document.querySelector(".carousel .thumbnail");
const thumbnails = thumbnailContainer.querySelectorAll(".item");
const transitionTime = 2000;
let timeoutId;

// Move the first thumbnail to the end of the container
thumbnailContainer.appendChild(thumbnails[0]);

// Event listeners for navigation buttons
nextButton.addEventListener("click", () => changeSlide("next"));
prevButton.addEventListener("click", () => changeSlide("prev"));

function changeSlide(direction) {
  const slides = slider.querySelectorAll(".carousel .list .item");
  const thumbnails = document.querySelectorAll(".carousel .thumbnail .item");

  if (direction === "next") {
    slider.appendChild(slides[0]); // Move first slide to the end
    thumbnailContainer.appendChild(thumbnails[0]); // Move first thumbnail to the end
    carousel.classList.add("next");
  } else {
    slider.prepend(slides[slides.length - 1]); // Move last slide to the beginning
    thumbnailContainer.prepend(thumbnails[thumbnails.length - 1]); // Move last thumbnail to the beginning
    carousel.classList.add("prev");
  }

  // Remove animation class after transition time
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    carousel.classList.remove("next", "prev");
  }, transitionTime);
}

console.log("Made by Afiur Nur");
