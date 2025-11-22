// HERO SLIDESHOW
const slides = document.querySelectorAll('#slides img');
let idx = 0;
function show(i) { slides.forEach((s,n)=>s.classList.toggle('visible',n===i)); }
setInterval(()=>{ idx=(idx+1)%slides.length; show(idx); },8000);

// HEADER SCROLL EFFECT
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

// FADE-IN SECTIONS
const sections = document.querySelectorAll(".page-section");
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
    else entry.target.classList.remove("visible");
  });
},{threshold:0.2});

sections.forEach(sec => {
  sec.classList.add("hidden");
  observer.observe(sec);
});
