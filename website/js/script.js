function updateBorderSpacing() {
const border = document.querySelector('.border');
const root = document.documentElement;

if (!border) return;

const w = window.innerWidth;
const h = border.getBoundingClientRect().height;

let heroRatio;
let contentRatio;
let borderOffset;

if (w >= 1400) {
    heroRatio = 0.50;
    contentRatio = 0.02;
    borderOffset = -62;
} else if (w >= 1000) {
    heroRatio = 0.57;
    contentRatio = 0.04;
    borderOffset = -56;
} else if (w >= 700) {
    heroRatio = 0.64;
    contentRatio = 0.07;
    borderOffset = -50;
} else {
    heroRatio = 0.58;
    contentRatio = 0.12;
    borderOffset = -42;
}

root.style.setProperty('--hero-seam-space', String(h * heroRatio) + 'px');
root.style.setProperty('--content-seam-space', String(h * contentRatio) + 'px');
root.style.setProperty('--border-offset', String(borderOffset) + '%');
}

window.addEventListener('load', updateBorderSpacing);
window.addEventListener('resize', updateBorderSpacing);