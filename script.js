// --- HERO SLIDESHOW (opacity-based, robust) ---

const slides = Array.from(document.querySelectorAll("#slides img"));
let slideIndex = 0;

function showSlide(i) {
  slides.forEach((el, n) => {
    if (n === i) {
      el.classList.add("visible");
      el.setAttribute("aria-hidden", "false");
    } else {
      el.classList.remove("visible");
      el.setAttribute("aria-hidden", "true");
    }
  });
}

// show first slide immediately if there are any slides
if (slides.length) {
  showSlide(0);

  setInterval(() => {
    if (!slides.length) return;
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 6000); // 6 seconds per your request
}

// --- NAVIGATION BETWEEN SECTIONS (no page reload) ---

const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".page-section");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("data-section");
    if (!targetId) return;

    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    sections.forEach((sec) => sec.classList.remove("active"));
    targetSection.classList.add("active");

    // always scroll to top smoothly when changing "pages"
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
