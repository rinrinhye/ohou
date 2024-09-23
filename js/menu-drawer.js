import {
  addClassList,
  removeClassList,
  toggleClassList,
} from './utils/classlist.js';
import { overlay, openOverlay, closeOverlay } from './overlay.js';
import { resetScrollTop } from './utils/scroll.js';

const menuButton = document.querySelector('.header__menu-button');
const menuDrawer = document.querySelector('.menu-drawer');

const menuDrawerGnbButtons = document.querySelectorAll(
  '.menu-drawer__gnb-button'
);
const menuDrawerGnbItems = document.querySelectorAll('.menu-drawer__gnb-item');

function openMenuDrawer() {
  addClassList(menuDrawer, 'on');
  openOverlay();
}

function closeMenuDrawer() {
  removeClassList(menuDrawer, 'on');
  closeOverlay();
  resetClassMenuDrawerGnbItems();
  resetScrollTop(menuDrawer);
}

function toggleMenuDrawerGnbItem(e) {
  const gnbItem = e.target.closest('.menu-drawer__gnb-item');
  toggleClassList(gnbItem, 'on');
}

function resetClassMenuDrawerGnbItems() {
  menuDrawerGnbItems.forEach((gnbItem, index) => {
    if (index !== 0) {
      removeClassList(gnbItem, 'on');
    } else {
      addClassList(gnbItem, 'on');
    }
  });
}

menuButton.addEventListener('click', openMenuDrawer);
overlay.addEventListener('click', closeMenuDrawer);
menuDrawerGnbButtons.forEach((button) => {
  button.addEventListener('click', toggleMenuDrawerGnbItem);
});
