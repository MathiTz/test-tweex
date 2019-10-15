const menuIcon = document.querySelector('.header-nav__icon');

const menuOpen = document.querySelector('.navigation-section');

const menuClose = document.querySelector('.navigation__icon--close');

menuIcon.addEventListener('click', () => {
  menuOpen.classList.add('navigation__menu');
});

menuClose.addEventListener('click', () => {
  menuOpen.classList.remove('navigation__menu');
});
