if (window.location.href.includes("index.html")) {
  const slides = document.getElementById("premiereSlides");
  const forward = document.getElementById("premiereForward");
  const back = document.getElementById("premiereBack");

  let slideIndex = 0;

  forward.addEventListener("click", () => {
    slideIndex++;
    showSlide();
  });

  back.addEventListener("click", () => {
    slideIndex--;
    showSlide();
  });

  function showSlide() {
    const slidesCount = document.querySelectorAll(".premiere__block").length;
    if (slideIndex < 0) {
      slideIndex = slidesCount - 1;
    } else if (slideIndex >= slidesCount) {
      slideIndex = 0;
    }
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
}
