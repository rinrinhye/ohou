const menuButton = document.querySelector('.header__menu-button');
const menuDrawer = document.querySelector('.menu-drawer');

function openMenuDrawer() {
  addClassList(menuDrawer, 'on');
  openOverlay();
}

function closeMenuDrawer() {
  removeClassList(menuDrawer, 'on');
  closeOverlay();
}

menuButton.addEventListener('click', openMenuDrawer);
overlay.addEventListener('click', closeMenuDrawer);
