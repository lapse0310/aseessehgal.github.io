const ribbon = document.getElementById('ribbon');

function updateRibbon() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  ribbon.style.height = `${Math.min(Math.max(progress, 0), 1) * 100}vh`;
}

window.addEventListener('scroll', updateRibbon, { passive: true });
updateRibbon();

document.querySelectorAll('.side-tabs .tab').forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(tab.getAttribute('href'));
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 24;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
