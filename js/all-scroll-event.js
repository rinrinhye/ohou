import { setPopupPositionOnScroll } from './popup-transform.js';
import { toggleHeaderVisibilityOnScroll } from './header.js';
import { closeLnbMenuPopupToScrollDown } from './lnb-popup.js';
import { updateScrollState } from './utils/scroll.js';

const lnbMenuPopup = document.querySelector('.lnb-menu-popup');

addEventListener('scroll', () => {
  updateScrollState();
  setPopupPositionOnScroll();
  toggleHeaderVisibilityOnScroll();

  if (!lnbMenuPopup.classList.contains('on')) {
    return;
  } else {
    closeLnbMenuPopupToScrollDown();
  }
});
