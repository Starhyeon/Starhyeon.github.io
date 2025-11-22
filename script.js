// HERO SLIDESHOW
const slides = document.querySelectorAll('#slides img');
let idx = 0;

function showSlide(i) {
  slides.forEach((s, n) => {
    s.classList.toggle('visible', n === i);
  });
}

// Initial display
showSlide(idx);

// Change slide every 8 seconds
setInterval(() => {
  idx = (idx + 1) % slides.length;
  showSlide(idx);
}, 8000);

// NAVIGATION BETWEEN SECTIONS
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.page-section');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-section');

    // Remove active class from all sections
    sections.forEach(sec => sec.classList.remove('active'));

    // Activate target section
    const activeSection = document.getElementById(target);
    if (activeSection) activeSection.classList.add('active');
  });
});
