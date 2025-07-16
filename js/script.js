let current = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 3000);


const headings = document.querySelectorAll('.heading');

const headingObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
}, { threshold: 0.3 });

headings.forEach(heading => headingObserver.observe(heading));

window.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.add('animate-navbar');
});
