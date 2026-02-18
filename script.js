// Scroll-triggered reveal animations
const revealElements = document.querySelectorAll('.section, .project-card, .skill-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Subtle cursor glow that follows mouse (desktop only)
if (window.matchMedia('(pointer: fine)').matches) {
  const glow = document.querySelector('.bg-glow');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    currentX += (mouseX - currentX) * 0.06;
    currentY += (mouseY - currentY) * 0.06;
    if (glow) {
      glow.style.left = `${currentX}px`;
      glow.style.top = `${currentY - 200}px`;
      glow.style.transform = 'translateX(-50%)';
    }
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
}
