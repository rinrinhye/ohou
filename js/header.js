import { addClassList, removeClassList } from './utils/classlist.js';
import { isResponsiveSM } from './utils/responsive.js';
import {
  currentScrollY,
  isScrollDown,
  setCurrentScrollY,
} from './utils/scroll.js';

const header = document.querySelector('.header');
const headerBottom = document.querySelector('.header__bottom');
const lnbMenuPopup = document.querySelector('.lnb-menu-popup');

function hideHeader() {
  addClassList(header, 'hidden');
}

function showHeader() {
  removeClassList(header, 'hidden');
}

function hideHeaderBottom() {
  addClassList(headerBottom, 'hidden');
}

function showHeaderBottom() {
  removeClassList(headerBottom, 'hidden');
}

function toggleHeaderVisibilityOnScroll() {
  if (isResponsiveSM()) {
    if (isScrollDown() && window.scrollY !== 0) {
      hideHeader();
    } else {
      showHeader();
    }
  }

  if (!isResponsiveSM()) {
    if (isScrollDown() && !lnbMenuPopup.classList.contains('on')) {
      hideHeaderBottom();
    } else {
      showHeaderBottom();
    }
  }
  setCurrentScrollY(window.scrollY);
}

function toggleHeaderVisibilityOnResize() {
  if (isResponsiveSM()) {
    if (headerBottom.classList.contains('hidden')) {
      hideHeaderBottom();
    }
  } else {
    showHeaderBottom();
  }

  if (!isResponsiveSM() && header.classList.contains('hidden')) {
    showHeader();
  }
}

function showHeaderBottomOnMouseenter() {
  if (!isResponsiveSM()) {
    showHeaderBottom();
  }
}

function hideHeaderBottomOnMouseleave() {
  if (
    !isResponsiveSM() &&
    currentScrollY !== 0 &&
    !lnbMenuPopup.classList.contains('on')
  ) {
    hideHeaderBottom();
  }
}

window.addEventListener('scroll', toggleHeaderVisibilityOnScroll);

window.addEventListener('resize', toggleHeaderVisibilityOnResize);

header.addEventListener('mouseenter', showHeaderBottomOnMouseenter);

header.addEventListener('mouseleave', hideHeaderBottomOnMouseleave);

const headerGnbItems = document.querySelectorAll('.header__gnb-item');
const headerLnbLists = document.querySelectorAll('.header__lnb-list');

let currentPageGnbItem = document.querySelector('.header__gnb-item.on');

let currentHeaderLnbList = document.querySelector('.header__lnb-list.on');

let currentHoverGnbItem = document.querySelector('.header__gnb-item.highlight');

headerGnbItems.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    if (!currentHoverGnbItem && item !== currentPageGnbItem) {
      addClassList(item, 'highlight');
      currentHoverGnbItem = item;
    } else if (currentHoverGnbItem && item !== currentPageGnbItem) {
      removeClassList(currentHoverGnbItem, 'highlight');
      addClassList(item, 'highlight');
      currentHoverGnbItem = item;
    }

    removeClassList(currentHeaderLnbList, 'on');
    addClassList(headerLnbLists[index], 'on');
    currentHeaderLnbList = headerLnbLists[index];
  });
});

header.addEventListener('mouseleave', () => {
  const currentPageGnbItemIndex =
    Array.from(headerGnbItems).indexOf(currentPageGnbItem);
  removeClassList(currentHeaderLnbList, 'on');
  addClassList(headerLnbLists[currentPageGnbItemIndex], 'on');
  currentHeaderLnbList = headerLnbLists[currentPageGnbItemIndex];
  if (currentHoverGnbItem) {
    removeClassList(currentHoverGnbItem, 'highlight');
  }
});
