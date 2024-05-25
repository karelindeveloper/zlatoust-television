document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggles = document.querySelectorAll(".nav__link-toggle");

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      const dropdown = this.parentNode;
      dropdown.classList.toggle("is-open");
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
      const dropdowns = document.querySelectorAll(".dropdown");
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("is-open");
      });
    }
  });
});
