const video = document.querySelector(".video__block");
const playBtn = document.querySelector(".video__btn");

if (
  window.location.pathname === "/index.html" ||
  window.location.pathname === "/single-news.html"
) {
  playBtn.addEventListener("click", togglePlay);
  video.addEventListener("click", togglePlay);

  function togglePlay() {
    if (video.paused) {
      video.play();
      playBtn.style.display = "none";
    } else {
      video.pause();
      playBtn.style.display = "block";
    }
  }

  video.addEventListener("ended", () => {
    playBtn.style.display = "block";
  });
}
