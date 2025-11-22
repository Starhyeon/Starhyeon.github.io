// ==============================
// HERO SLIDESHOW
// ==============================
const slides = document.querySelectorAll('#slides img');
let idx = 0;

function showSlide(i) {
  slides.forEach((slide, n) => {
    slide.style.opacity = (n === i) ? '1' : '0';
    slide.style.transform = (n === i) ? 'scale(1.06)' : 'scale(1)';
  });
}

// Start slideshow interval
setInterval(() => {
  idx = (idx + 1) % slides.length;
  showSlide(idx);
}, 8000);

// Show first slide immediately
showSlide(idx);

// ==============================
// NAVIGATION BETWEEN SECTIONS
// ==============================
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.page-section');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-section');

    // Hide all sections
    sections.forEach(sec => sec.classList.remove('active'));

    // Show target section
    const activeSection = document.getElementById(target);
    if(activeSection) activeSection.classList.add('active');

    // Optional: scroll to top of viewport
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ==============================
// OPTIONAL: FADE IN SECTIONS
// ==============================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
    else entry.target.classList.remove('visible');
  });
}, { threshold: 0.2 });

sections.forEach(sec => {
  sec.classList.add('hidden');
  observer.observe(sec);
});
