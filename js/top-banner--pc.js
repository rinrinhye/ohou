import { addClassList, removeClassList } from './utils/classlist.js';
import { currentInnerWidth } from './utils/resize.js';
import { setPopupPosition } from './popup-transform.js';

const header = document.querySelector('.header');
const pcTopBanner = document.querySelector('.top-banner--pc');
const pcTopBannerCloseButton = document.querySelector(
  '.top-banner__close-button--pc'
);

function closepcTopBanner() {
  const maxXLWidth = 1280;
  const x = (currentInnerWidth - maxXLWidth) / 2;

  pcTopBanner.remove();
  removeClassList(header, 'top-50');
  setPopupPosition(x, 0);
}

function togglepcTopBannerOnLoad() {
  if (currentInnerWidth <= 1024) {
    removeClassList(header, 'top-50');
  }
}

function toggleHeaderClassListOnResize() {
  if (currentInnerWidth >= 1024) {
    const pcTopBanner = document.querySelector('.top-banner--pc');
    if (pcTopBanner) {
      addClassList(header, 'top-50');
    }
  } else {
    removeClassList(header, 'top-50');
  }
}

pcTopBannerCloseButton.addEventListener('click', closepcTopBanner);
window.addEventListener('load', togglepcTopBannerOnLoad);
window.addEventListener('resize', toggleHeaderClassListOnResize);
