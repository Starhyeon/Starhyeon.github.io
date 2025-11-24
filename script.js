// --- HERO SLIDESHOW (opacity-based) ---

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

// show first slide immediately if there are any
if (slides.length) {
  showSlide(0);

  setInterval(() => {
    if (!slides.length) return;
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 6000); // 6 seconds per slide
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

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// --- HERO PARALLAX (very subtle, safe) ---

const heroSection = document.getElementById("hero");
const heroText = document.querySelector(".hero-text");

if (heroSection && heroText) {
  heroSection.addEventListener("mousemove", (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const translateX = x * 16; // adjust strength
    const translateY = y * 10;

    heroText.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
  });

  heroSection.addEventListener("mouseleave", () => {
    heroText.style.transform = "translate3d(0, 0, 0)";
  });
}
