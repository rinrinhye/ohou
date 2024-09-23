import {
  isResponsiveMD,
  isResponsiveLG,
  isResponsiveXL,
} from './utils/responsive.js';
import { currentInnerWidth } from './utils/resize.js';
import { currentScrollY } from './utils/scroll.js';
import { applyCssTranslate, applyCssTranslateY } from './utils/translate.js';

const popups = document.querySelectorAll('.popup');

function popupTransform() {
  const pcTopBanner = document.querySelector('.top-banner--pc');
  const maxXLWidth = 1280;
  const y = 50;

  if (isResponsiveMD()) {
    resetPopupPosition();
  } else if (isResponsiveLG() && !pcTopBanner) {
    resetPopupPosition();
  } else if (isResponsiveLG() && pcTopBanner) {
    const x = (currentInnerWidth - maxXLWidth) / 2;
    if (currentScrollY === 0) {
      setPopupPostionY50();
    } else {
      setPopupPosition(x, 0);
    }
  } else if (isResponsiveXL() && !pcTopBanner) {
    const x = (currentInnerWidth - maxXLWidth) / 2;
    setPopupPosition(x, 0);
  } else if (isResponsiveXL() && pcTopBanner) {
    const x = (currentInnerWidth - maxXLWidth) / 2;

    if (currentScrollY === 0) {
      setPopupPosition(x, y);
    } else {
      setPopupPosition(x, 0);
    }
  }
}

window.addEventListener('load', popupTransform);
window.addEventListener('resize', popupTransform);

function resetPopupPosition() {
  popups.forEach((popup) => {
    applyCssTranslate(popup, 0, 0);
  });
}

function setPopupPostionY50() {
  popups.forEach((popup) => {
    applyCssTranslateY(popup, 50);
  });
}

export function setPopupPosition(x, y) {
  popups.forEach((popup) => {
    applyCssTranslate(popup, x, y);
  });
}

window.addEventListener('scroll', () => {
  const pcTopBanner = document.querySelector('.top-banner--pc');
  const maxXLWidth = 1280;
  const x = (currentInnerWidth - maxXLWidth) / 2;

  if (isResponsiveLG() && pcTopBanner) {
    if (currentScrollY === 0) {
      setPopupPosition(0, 50);
    } else {
      setPopupPosition(0, 0);
    }
  } else if (isResponsiveLG() && !pcTopBanner) {
    setPopupPosition(0, 0);
  } else if (isResponsiveXL() && pcTopBanner) {
    if (currentScrollY === 0) {
      setPopupPosition(x, 50);
    } else {
      setPopupPosition(x, 0);
    }
  } else if (isResponsiveXL() && !pcTopBanner) {
    setPopupPosition(x, 0);
  }
});
