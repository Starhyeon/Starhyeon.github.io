// ----------------------
// HERO SLIDESHOW
// ----------------------
const slides = document.querySelectorAll('#slides img');
let idx = 0;

function showSlide(i) {
  slides.forEach((slide, n) => slide.classList.toggle('visible', n === i));
}

setInterval(() => {
  idx = (idx + 1) % slides.length;
  showSlide(idx);
}, 8000);

// ----------------------
// OPTIONAL HEADER EFFECT
// ----------------------
// If you want the header to slightly change on hover or small scroll
const header = document.querySelector('header');
header.addEventListener('mouseenter', () => {
  header.classList.add('active');
});
header.addEventListener('mouseleave', () => {
  header.classList.remove('active');
});
