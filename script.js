// Reveal on scroll
const reveal = () => {
  document.querySelectorAll('.reveal, .proj').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 80){
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', reveal);
window.addEventListener('load', () => {
  reveal();

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if(id.length > 1){
        e.preventDefault();
        document.querySelector(id).scrollIntoView({
          behavior:'smooth'
        });
      }
    });
  });
});
