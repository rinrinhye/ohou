import './utils/classlist.js';
import './utils/input.js';
import './utils/resize.js';
import './utils/responsive.js';
import './utils/scroll.js';
import './utils/translate.js';

import './footer.js';
import './header.js';
import './lnb-mobile-tab-menu.js';
import './lnb-popup.js';
import './lnb.js';
import './menu-drawer.js';
import './overlay.js';
import './popular-search-terms-popup.js';
import './popup-transform.js';
import './search-drawer.js';
import './search-group.js';

import './top-banner--pc.js';
import './write-list-popup.js';
import './worker.js';

import './swiper/arrow-button.js';
import './swiper/banner-slide.js';
import './swiper/best-product-category-control-slide.js';
import './swiper/interior-pic-slide.js';
import './swiper/product-category-shortcut-slide.js';
import './swiper/today-deal-product-slide.js';

import '../style.css';

const images = require.context(
  '../assets',
  false,
  /\.(png|jpg|jpeg|gfif|svg)$/
);

export const worker = new Worker(new URL('./worker.js', import.meta.url));

const timeBadges = document.querySelectorAll('.badge--time');

timeBadges.forEach((badge) => {
  const hours = new Date().getHours().toString().padStart(2, '0');
  const minutes = new Date().getMinutes().toString().padStart(2, '0');
  const seconds = new Date().getSeconds().toString().padStart(2, '0');
  badge.innerText = `${hours}:${minutes}:${seconds} 남음`;
});

worker.postMessage({ type: 'start' });

worker.onmessage = function (e) {
  const { hours, minutes, seconds } = e.data;
  if (hours === '00' && minutes === '00' && seconds === '00') {
    timeBadges.forEach((badge) => {
      badge.innerText = `마감`;
    });
    this.postMessage({ type: 'end' });
  } else {
    timeBadges.forEach((badge) => {
      badge.innerText = `${hours}:${minutes}:${seconds} 남음`;
    });
  }
};
