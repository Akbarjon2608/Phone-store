let currentIndex = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");

  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${-currentIndex * 100}%)`;
  });
}
