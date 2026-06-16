const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("gantiPage");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});
