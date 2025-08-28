document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-item button').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.nextElementSibling.classList.toggle('open');
    });
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open);
      mobileMenu.setAttribute('aria-hidden', !open);
    });
  }
});
