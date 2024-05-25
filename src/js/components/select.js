if (window.location.pathname === "/news.html") {
  const defaultSelect = () => {
    const element = document.getElementById("choicesSelect");
    const choices = new Choices(element, {
      allowHTML: true,
      searchEnabled: false,
      silent: true,
      placeholder: true,
      placeholderValue: "Выбрать рубрику",
      itemSelectText: "",
      renderChoiceLimit: 6,
    });
  };

  defaultSelect();
}
