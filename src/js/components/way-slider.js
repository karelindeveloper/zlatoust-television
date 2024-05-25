if (window.location.pathname === "/index.html") {
  document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".way__slider");
    const slides = document.querySelectorAll(".way__block");
    const prevButton = document.querySelector("#backBtn");
    const nextButton = document.querySelector("#forwardBtn");

    let slideWidth = slides[0].offsetWidth;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let currentIndex = 0;
    const threshold = 100;
    const totalSlides = slides.length;

    slides.forEach((slide) => {
      slide.addEventListener("touchstart", touchStart);
      slide.addEventListener("touchend", touchEnd);
      slide.addEventListener("touchmove", touchMove);
      slide.addEventListener("mousedown", touchStart);
      slide.addEventListener("mouseup", touchEnd);
      slide.addEventListener("mouseleave", touchEnd);
      slide.addEventListener("mousemove", touchMove);
    });

    function updateSlidesPosition() {
      slideWidth = slides[0].offsetWidth;
      wrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function nextSlide() {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSlidesPosition();
      }
    }

    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlidesPosition();
      }
    }

    function touchStart(event) {
      isDragging = true;
      startPos = getPositionX(event);
      slides.forEach((slide) => {
        slide.style.transition = "none";
      });
    }

    function touchMove(event) {
      if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
      }
    }

    function touchEnd() {
      isDragging = false;
      const moveBy = currentTranslate - prevTranslate;

      if (moveBy < -threshold && currentIndex < slides.length - 1) {
        currentIndex += 1;
      } else if (moveBy > threshold && currentIndex > 0) {
        currentIndex -= 1;
      }

      setSlidePosition();
    }

    function setSlidePosition() {
      currentTranslate = currentIndex * -100;
      prevTranslate = currentTranslate;
      slides.forEach((slide) => {
        slide.style.transform = `translateX(${currentTranslate}%)`;
        slide.style.transition = "transform 0.5s ease";
      });
    }

    function getPositionX(event) {
      return event.type.includes("mouse")
        ? event.pageX
        : event.touches[0].clientX;
    }

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
    window.addEventListener("resize", updateSlidesPosition);
    updateSlidesPosition();
  });
}
