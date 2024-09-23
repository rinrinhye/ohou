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
import './timer.js';
import './worker.js';

import './swiper/banner-slide.js';
import './swiper/best-product-category-slide.js';
import './swiper/interior-pic-slide.js';
import './swiper/product-category-shortcut-slide.js';
import './swiper/today-deal-product-slide.js';

import '../style.css';

const images = require.context(
  '../assets',
  false,
  /\.(png|jpg|jpeg|gfif|svg)$/
);
