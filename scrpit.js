const slides = document.querySelectorAll('#slides img');
let idx = 0;

function show(i) {
  slides.forEach((s, n) => s.classList.toggle('visible', n === i));
}

setInterval(() => {
  idx = (idx + 1) % slides.length;
  show(idx);
}, 8000);

// INTRO FADE OUT
const intro = document.getElementById('intro');

function hideIntro() {
  intro.style.opacity = '0';
  intro.style.pointerEvents = 'none';
  setTimeout(() => intro.remove(), 800);
}

setTimeout(hideIntro, 1500);
