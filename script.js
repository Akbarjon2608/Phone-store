let currentSlide = 1;

function showSlide(n) {
  const slides = document.querySelectorAll(".carousel-slide");

  if (n > slides.length) {
    currentSlide = 1;
  } else if (n < 1) {
    currentSlide = slides.length;
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  slides[currentSlide - 1].style.display = "block";
}

function prevSlide() {
  showSlide((currentSlide -= 1));
}

function nextSlide() {
  showSlide((currentSlide += 1));
}

// Показываем первый слайд при загрузке страницы
showSlide(currentSlide);
