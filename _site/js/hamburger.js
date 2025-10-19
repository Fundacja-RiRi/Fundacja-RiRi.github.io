function initHamburger() {
  const toggle = document.querySelector('.navbar-toggle');
  const menu = document.querySelector('.navbar-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
    return true;
  }
  return false;
}

// Spróbuj co 200ms, aż navbar się pojawi
const interval = setInterval(() => {
  if (initHamburger()) clearInterval(interval);
}, 200);
