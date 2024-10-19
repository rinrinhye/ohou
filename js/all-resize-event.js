import { updateInnerWidth } from './utils/resize.js';
import { popupTransform } from './popup-transform.js';
import { toggleMobileTabMenuAndlnbMenuPopupOnResize } from './lnb-popup.js';
import { toggleHeaderVisibilityOnResize } from './header.js';

export const popupState = {
  lnbMenuPopup: false,
  searchTermsPopup: false,
  writeListPopup: false,
};

function popupIsAllClosed() {
  const state = Object.values(popupState).every((v) => !v);
  return state;
}

function debounce(callback, time = 500) {
  let timeOut;

  if (popupIsAllClosed()) {
    return function (...args) {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        callback.apply(this, args);
      }, time);
    };
  }
}

function allResize() {
  updateInnerWidth();
  popupTransform();
  toggleMobileTabMenuAndlnbMenuPopupOnResize();
  toggleHeaderVisibilityOnResize();
}

window.addEventListener('resize', allResize);
