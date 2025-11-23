// ------------------------------------------------------------
// HERO SLIDESHOW (supports unlimited images)
// ------------------------------------------------------------
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

// Show first slide instantly
if (slides.length > 0) {
  showSlide(0);
}

// Change slide every 8 seconds
setInterval(() => {
  if (slides.length === 0) return;
  idx = (idx + 1) % slides.length;
  showSlide(idx);
}, 8000);


// ------------------------------------------------------------
// NAVIGATION BETWEEN SECTIONS (smooth, no page reload)
// ------------------------------------------------------------
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.page-section');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = link.getAttribute('data-section');
    if (!target) return;

    const section = document.getElementById(target);
    if (!section) return;

    // Hide all
    sections.forEach(sec => sec.classList.remove('active'));

    // Show target
    section.classList.add('active');

    // Smooth scroll to top of page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
