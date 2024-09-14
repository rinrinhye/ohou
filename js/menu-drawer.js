const menuButton = document.querySelector('.header__menu-button');
const menuDrawer = document.querySelector('.menu-drawer');
const overlay = document.querySelector('.overlay');

const openMenuDrawer = () => {
  menuDrawer.classList.add('on');
  overlay.classList.add('on');
};

const closeMenuDrawer = () => {
  menuDrawer.classList.remove('on');
  overlay.classList.remove('on');
};

menuButton.addEventListener('click', openMenuDrawer);
overlay.addEventListener('click', closeMenuDrawer);
