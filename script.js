document.addEventListener('DOMContentLoaded', () => {
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
