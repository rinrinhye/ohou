import { setPopupPositionOnScroll } from './popup-transform.js';
import { toggleHeaderVisibilityOnScroll } from './header.js';
import { closeLnbMenuPopupToScrollDown } from './lnb-popup.js';
import { updateCurrentScrollY } from './utils/scroll.js';

const lnbMenuPopup = document.querySelector('.lnb-menu-popup');

addEventListener('scroll', () => {
  updateCurrentScrollY();
  setPopupPositionOnScroll();
  toggleHeaderVisibilityOnScroll();

  if (!lnbMenuPopup.classList.contains('on')) {
    return;
  } else {
    closeLnbMenuPopupToScrollDown();
  }
});
