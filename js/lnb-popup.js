import { addClassList, removeClassList } from './utils/classlist.js';
import { isResponsiveSM } from './utils/responsive.js';
import { isScreenExpanded, setIsScreenExpanded } from './utils/resize.js';
import { isScrollDown } from './utils/scroll.js';
import {
  openMobileTabMenu,
  closeMobileTabMenu,
} from './lnb-mobile-tab-menu.js';

const header = document.querySelector('.header');
const headerBottom = document.querySelector('.header__bottom');
const headerGnbItems = document.querySelectorAll('.header__gnb-item');

const lnbMenuList = document.querySelector('.header__lnb-list.on');
const lnbMenuItems = lnbMenuList.querySelectorAll('.header__lnb-item');

const lnbMenuPopup = document.querySelector('.lnb-menu-popup');
const lnbMenuPopupList = document.querySelector('.lnb-menu-popup__list');

const lnbMenuButton = document.querySelector('.header__lnb-menu-button');
const mobileTabMenu = document.querySelector('.mobile-tab-menu');

function openLnbMenuPopup() {
  addClassList(lnbMenuPopup, 'on');

  window.addEventListener('click', clickOutsideLnbMenuButton);
}

function closeLnbMenuPopup() {
  removeClassList(lnbMenuPopup, 'on');
}

export function toggleLnbMenuPopup() {
  if (!lnbMenuPopup.classList.contains('on')) {
    openLnbMenuPopup();
  } else {
    closeLnbMenuPopup();
  }
}

function clickOutsideLnbMenuButton(e) {
  if (!e.target.classList.contains('header__lnb-menu-button')) {
    closeLnbMenuPopup();
    window.removeEventListener('click', clickOutsideLnbMenuButton);
  }
}

function hideLnbMenuButton() {
  lnbMenuButton.classList.add('none');
}
function showLnbMenuButton() {
  lnbMenuButton.classList.remove('none');
}

function showLnbMenuButtonOnMouseleave() {
  showLnbMenuButton();
  header.removeEventListener('mouseover', hideLnbMenuButton);
}

function toggleMobileTabMenuAndlnbMenuPopupOnResize() {
  if (
    mobileTabMenu.classList.contains('on') ||
    lnbMenuPopup.classList.contains('on')
  ) {
    if (isResponsiveSM()) {
      openMobileTabMenu();
      closeLnbMenuPopup();

      headerBottomObserver.disconnect();
    } else {
      closeMobileTabMenu();
      openLnbMenuPopup();

      headerBottomObserver.observe(headerBottom);
    }
  }
}

function closeLnbMenuPopupToScrollDown() {
  if (isScrollDown()) {
    closeLnbMenuPopup();
  }
}

function createNewLnbMenuPopupItem() {
  const a = document.createElement('a');
  a.setAttribute('href', '');
  addClassList(a, 'lnb-menu-popup__item');
  return a;
}

function startHeaderBottomObserverOnHover() {
  if (lnbMenuPopupList.innerText === '') {
    headerBottomObserver.observe(headerBottom);
  }
}

const lnbMenuPopupItemObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        const newLnbPopupMenuItem = createNewLnbMenuPopupItem();
        newLnbPopupMenuItem.innerText = entry.target.innerText;

        if (isScreenExpanded === undefined || isScreenExpanded) {
          lnbMenuPopupList.append(newLnbPopupMenuItem);
        } else if (isScreenExpanded === false) {
          lnbMenuPopupList.prepend(newLnbPopupMenuItem);
        }
      } else {
        const currentLnbMenuPopupItems = document.querySelectorAll(
          '.lnb-menu-popup__item'
        );

        const filteredItem = Array.from(currentLnbMenuPopupItems).find(
          (item) => {
            return item.innerText === entry.target.innerText;
          }
        );

        if (filteredItem) {
          filteredItem.remove();
        }
      }
    });
  },
  { threshold: 1 }
);

const headerBottomObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // headerbottom 보일 때 screen 넓이 상태 초기화
        setIsScreenExpanded(undefined);

        lnbMenuItems.forEach((item) => {
          lnbMenuPopupItemObserver.observe(item);
        });
      }
      if (!entry.isIntersecting) {
        closeLnbMenuPopup();
        // headerBottom 안보일 때마다 내부 list 삭제시키기
        lnbMenuPopupList.innerText = '';
        lnbMenuPopupItemObserver.disconnect();
      }
    });
  },
  {
    threshold: 1,
    rootMargin: '-80px 0px 0px 0px',
  }
);

headerGnbItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    if (!item.classList.contains('on')) {
      closeLnbMenuPopup();

      lnbMenuPopupList.innerText = '';
      headerBottomObserver.disconnect();
      lnbMenuPopupItemObserver.disconnect();

      hideLnbMenuButton();
      header.addEventListener('mouseover', hideLnbMenuButton);
    } else {
      headerBottomObserver.observe(headerBottom);
      header.removeEventListener('mouseover', hideLnbMenuButton);
      showLnbMenuButton();
    }
  });
});

header.addEventListener('mouseenter', startHeaderBottomObserverOnHover);

window.addEventListener('scroll', closeLnbMenuPopupToScrollDown);

window.addEventListener('resize', toggleMobileTabMenuAndlnbMenuPopupOnResize);

header.addEventListener('mouseleave', showLnbMenuButtonOnMouseleave);

//
headerBottomObserver.observe(headerBottom);
