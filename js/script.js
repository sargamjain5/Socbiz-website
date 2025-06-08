// Scroll down when clicking the arrow
document.querySelector('.arrow').addEventListener('click', () => {
  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
});

