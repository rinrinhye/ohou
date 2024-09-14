const lnbMenuButton = document.querySelector('.header__lnb-menu-button');
const lnbMenuPopup = document.querySelector('.lnb-menu-popup');
const mobileTabMenu = document.querySelector('.mobile-tab-menu');
const mobileTabMenuCloseButton = document.querySelector(
  '.mobile-tab-menu__close-button'
);

function openLnbMenuPopup() {
  addClassList(lnbMenuPopup, 'on');
}

function closeLnbMenuPopup() {
  removeClassList(lnbMenuPopup, 'on');
}

function toggleLnbMenuPopup() {
  if (!lnbMenuPopup.classList.contains('on')) {
    openLnbMenuPopup();
    window.addEventListener('click', clickOutsideLnbMenuButton);
  } else {
    closeLnbMenuPopup();
  }
}

function clickOutsideLnbMenuButton(e) {
  if (!e.target.classList.contains('header__lnb-menu-button')) {
    removeClassList(lnbMenuPopup, 'on');
    window.removeEventListener('click', clickOutsideLnbMenuButton);
  }
}

const openMobileTabMenu = () => {
  addClassList(mobileTabMenu, 'on');
  openOverlay();
};

const closeMobileTabMenu = () => {
  removeClassList(mobileTabMenu, 'on');
  closeOverlay();
};

function clickOutSideMobileTabMenu(e) {
  if (e.target === overlay) {
    closeMobileTabMenu();
    window.removeEventListener('click', clickOutSideMobileTabMenu);
  }
}

function clickLnbMenuButton() {
  if (isResponsiveSM()) {
    openMobileTabMenu();
  } else {
    toggleLnbMenuPopup();
  }
}

function toggleMobileTabMenuAndlnbMenuPopupOnResize() {
  if (
    mobileTabMenu.classList.contains('on') ||
    lnbMenuPopup.classList.contains('on')
  ) {
    if (isResponsiveSM()) {
      openMobileTabMenu();
      closeLnbMenuPopup();
    } else {
      closeMobileTabMenu();
      openLnbMenuPopup();
    }
  }
}

lnbMenuButton.addEventListener('click', clickLnbMenuButton);
overlay.addEventListener('click', closeMobileTabMenu);
mobileTabMenuCloseButton.addEventListener('click', closeMobileTabMenu);
window.addEventListener('resize', toggleMobileTabMenuAndlnbMenuPopupOnResize);
