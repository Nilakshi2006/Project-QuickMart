document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLink = document.querySelector('#navLink');

  if (!navToggle || !navLink) {
    return;
  }

  navToggle.addEventListener('click', function () {
    const isOpen = navLink.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) {
      navLink.classList.remove('open');
      navToggle.classList.remove('open');
    }
  });
});
