import { currentInnerWidth } from './utils/resize.js';
import { setPopupPosition } from './popup-transform.js';

const pcTopBanner = document.querySelector('.top-banner--pc');
const pcTopBannerCloseButton = document.querySelector(
  '.top-banner__close-button--pc'
);

function closepcTopBanner() {
  const maxXLWidth = 1280;
  const x = (currentInnerWidth - maxXLWidth) / 2;

  pcTopBanner.remove();
  setPopupPosition(x, 0);
}

pcTopBannerCloseButton.addEventListener('click', closepcTopBanner);
