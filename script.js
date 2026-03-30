```javascript
const topbar = document.querySelector('.topbar');
const moduleCards = document.querySelectorAll('.module-card');
const signalPanels = document.querySelectorAll('.signal-panel');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    topbar.style.background = 'rgba(3, 7, 12, 0.55)';
    topbar.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
  } else {
    topbar.style.background = 'rgba(3, 7, 12, 0.35)';
    topbar.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
  }
});

function addGlowTilt(elements) {
  elements.forEach((element) => {
    element.addEventListener('mousemove', (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 8;
      const rotateX = ((y / rect.height) - 0.5) * -8;

      element.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      element.style.boxShadow = '0 28px 70px rgba(0,0,0,0.42), 0 0 30px rgba(154,247,215,0.08)';
    });

    element.addEventListener('mouseleave', () => {
      element.style.transform = '';
      element.style.boxShadow = '';
    });
  });
}

addGlowTilt(moduleCards);
addGlowTilt(signalPanels);

console.log('AI Agents Archive ready.');
```
