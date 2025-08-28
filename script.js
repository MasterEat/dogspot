document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  if (slides) {
    let index = 0;
    const total = slides.children.length;
    setInterval(() => {
      index = (index + 1) % total;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }, 5000); // change slide every 5 seconds
  }

  document.querySelectorAll('.faq-item button').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.nextElementSibling.classList.toggle('open');
    });
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('header nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open);
    });
  }
});
