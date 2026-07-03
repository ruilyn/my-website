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