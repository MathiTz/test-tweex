// MENU

const menuIcon = document.querySelector('.header-nav__icon');

const menuOpen = document.querySelector('.navigation-section');

const menuClose = document.querySelector('.navigation__icon--close');

menuIcon.addEventListener('click', () => {
  menuOpen.classList.add('navigation__menu');
});

menuClose.addEventListener('click', () => {
  menuOpen.classList.remove('navigation__menu');
});

// MENU

// MENU CIRCLE

const items = document.querySelectorAll('.navigation-menu__items');

let menuItems = Array.from(items[0].children);

menuItems.forEach(i => {
  i.addEventListener('click', () => {
    if (i.classList.contains('navigation-menu__item--checked')) {
      i.classList.remove('navigation-menu__item--checked');
    } else {
      i.classList.add('navigation-menu__item--checked');
    }
  });
});

// MENU CIRCLE
