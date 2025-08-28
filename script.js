document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-item button').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.nextElementSibling.classList.toggle('open');
    });
  });
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const themeToggles = document.querySelectorAll('.theme-toggle');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuButton.classList.toggle('open');
    const isOpen = mobileMenu.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
  });

  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    });
  });
});
