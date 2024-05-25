if (window.location.href.includes("index.html")) {
  const slides = document.getElementById("heroSlides");
  const preview = document.getElementById("heroPreview");
  const btn1 = document.getElementById("heroSlide1");
  const btn2 = document.getElementById("heroSlide2");
  const btn3 = document.getElementById("heroSlide3");
  const btn4 = document.getElementById("heroSlide4");
  const btn5 = document.getElementById("heroSlide5");

  let slideIndex = 0;

  btn1.addEventListener("click", () => {
    slideIndex = 0;
    showSlide();
  });

  btn2.addEventListener("click", () => {
    slideIndex = 1;
    showSlide();
  });

  btn3.addEventListener("click", () => {
    slideIndex = 2;
    showSlide();
  });

  btn4.addEventListener("click", () => {
    slideIndex = 3;
    showSlide();
  });

  btn5.addEventListener("click", () => {
    slideIndex = 4;
    showSlide();
  });

  function showSlide() {
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    preview.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
}
