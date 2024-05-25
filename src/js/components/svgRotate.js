document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname === "/news.html") {
    const select = document.querySelector(".choices");
    const calendar = document.querySelector("#datePicker");
    const svgSelect = document.querySelector(".news-all__select-image");
    const svgCalendar = document.querySelector(".news-all__date-image");

    calendar.addEventListener("click", function () {
      calendar.classList.toggle("show");
    });

    calendar.addEventListener("click", function () {
      if (calendar.classList.contains("show")) {
        svgCalendar.style.transform = "rotate(0deg)";
      } else {
        svgCalendar.style.transform = "rotate(-180deg)";
      }
    });

    select.addEventListener("click", function () {
      if (select.classList.contains("is-open")) {
        svgSelect.style.transform = "rotate(0deg)";
      } else {
        svgSelect.style.transform = "rotate(-180deg)";
      }
    });
  }
});
