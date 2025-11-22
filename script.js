// HERO SLIDESHOW
const slides = document.querySelectorAll('#slides img');
let idx = 0;
function show(i){ slides.forEach((s,n)=>s.classList.toggle('visible', n===i)); }
setInterval(()=>{ idx=(idx+1)%slides.length; show(idx); },8000);

// NAVIGATION BETWEEN SECTIONS
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.page-section');

navLinks.forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    const target = link.getAttribute('data-section');
    sections.forEach(sec => sec.classList.remove('active'));
    const activeSection = document.getElementById(target);
    if(activeSection) activeSection.classList.add('active');
  });
});
