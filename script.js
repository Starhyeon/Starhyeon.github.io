// --- HERO SLIDESHOW ---
const slides = Array.from(document.querySelectorAll('#slides img'));
let idx = 0;

function showSlide(i) {
  slides.forEach((el, n) => {
    if (n === i) {
      el.classList.add('visible');
      el.setAttribute('aria-hidden', 'false');
    } else {
      el.classList.remove('visible');
      el.setAttribute('aria-hidden', 'true');
    }
  });
}

// show first slide immediately
if (slides.length) {
  showSlide(0);
}

// change slide every 8 seconds
setInterval(() => {
  if (!slides.length) return;
  idx = (idx + 1) % slides.length;
  showSlide(idx);
}, 8000);

// --- NAVIGATION BETWEEN SECTIONS ---
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.page-section');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-section');
    if (!target) return;
    const targetEl = document.getElementById(target);
    if (!targetEl) return;

    // toggle visibility
    sections.forEach(sec => sec.classList.remove('active'));
    targetEl.classList.add('active');

    // scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
