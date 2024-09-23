import { addClassList, removeClassList } from './utils/classlist.js';
import { toggleLnbMenuPopup } from './lnb-popup.js';
import { isResponsiveSM } from './utils/responsive.js';
import { overlay, openOverlay, closeOverlay } from './overlay.js';

const lnbMenuButton = document.querySelector('.header__lnb-menu-button');
const mobileTabMenu = document.querySelector('.mobile-tab-menu');
const mobileTabMenuCloseButton = document.querySelector(
  '.mobile-tab-menu__close-button'
);

export const openMobileTabMenu = () => {
  addClassList(mobileTabMenu, 'on');
  openOverlay();
};

export const closeMobileTabMenu = () => {
  removeClassList(mobileTabMenu, 'on');
  closeOverlay();
};

function clickLnbMenuButton() {
  if (isResponsiveSM()) {
    openMobileTabMenu();
  } else {
    toggleLnbMenuPopup();
  }
}

lnbMenuButton.addEventListener('click', clickLnbMenuButton);
overlay.addEventListener('click', closeMobileTabMenu);
mobileTabMenuCloseButton.addEventListener('click', closeMobileTabMenu);
