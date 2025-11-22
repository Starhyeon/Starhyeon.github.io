// HERO SLIDESHOW
const slides = document.querySelectorAll('#slides img');
let idx = 0;
function show(i){ slides.forEach((s,n)=>s.classList.toggle('visible',n===i)); }
setInterval(()=>{ idx=(idx+1)%slides.length; show(idx); },8000);

// SECTION NAVIGATION
const navLinks = document.querySelectorAll('header nav a');
function showSection(id){
  document.querySelectorAll('.page-section').forEach(sec=>sec.classList.remove('active'));
  const target = document.getElementById(id);
  if(target) target.classList.add('active');
}

// Attach nav events
navLinks.forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    showSection(link.getAttribute('href').substring(1));
  });
});

// Show hero by default
document.getElementById('hero').classList.add('active');
