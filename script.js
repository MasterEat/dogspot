document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-item button').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.nextElementSibling.classList.toggle('open');
    });
  });
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuButton.classList.toggle('open');
    const isOpen = mobileMenu.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
  });
});
