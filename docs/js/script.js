function updateScrollTextBand() {
  const band = document.querySelector('.scroll-text-band');
  if (!band) return;

  const rect = band.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
  const clamped = Math.max(0, Math.min(1, progress));
  band.style.setProperty('--scroll-progress', clamped - 0.5);
}

window.addEventListener('scroll', updateScrollTextBand, { passive: true });
window.addEventListener('load', updateScrollTextBand);

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = menuBtn.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    mobileMenu.classList.toggle('show', isOpen);
  });
}
//god save me