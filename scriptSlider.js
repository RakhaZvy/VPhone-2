const slides = document.getElementById("slides");
const totalSlides = slides.children.length;
let index = 0;
const prevbtn = document.getElementById("prev-btn");
const nextbtn = document.getElementById("next-btn");

function showSlide(i) {
  if (i < 0) {
    index = totalSlides - 1;
  } else if (i >= totalSlides) {
    index = 0;
  } else {
    index = i;
  }
  slides.style.transform = "translateX(" + -index * 100 + "%)";
}

prevbtn.addEventListener("click", () => {
  showSlide(index - 1);
});

nextbtn.addEventListener("click", () => {
  showSlide(index + 1);
});

setInterval(() => {
  showSlide(index + 1);
}, 5000);

showSlide(0);
