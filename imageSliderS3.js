document.addEventListener("DOMContentLoaded", function () {
  const section3 = document.querySelector(".section3");
  const slider = document.querySelector(".imageSlider");
  const images = document.querySelectorAll(".imageSlider img");
  const imageCount = images.length;
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % imageCount;
    updateSlider();
  }

  function updateSlider() {
    const offset = currentIndex * 100;
    if (offset == 0) {
      slider.style.transition = "0s linear";
    } else {
      slider.style.transition = ".7s linear";
    }
    slider.style.transform = `translateX(-${offset}%)`;
  }

  setInterval(nextSlide, 4000);
});
