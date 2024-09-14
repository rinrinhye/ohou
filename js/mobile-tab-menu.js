const mobileTabMenu = document.querySelector('.mobile-tab-menu');
const overlay = document.querySelector('.overlay');
const mobileTabMenuCloseButton = document.querySelector(
  '.mobile-tab-menu__close-button'
);
const lnbMenuButton = document.querySelector('.header__lnb-menu-button');

const openMobileTabMenu = () => {
  mobileTabMenu.classList.add('on');
  overlay.classList.add('on');
};

const closeMobileTabMenu = () => {
  mobileTabMenu.classList.remove('on');
  overlay.classList.remove('on');
};

lnbMenuButton.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    if (!mobileTabMenu.classList.contains('on')) {
      openMobileTabMenu();
      window.addEventListener('click', clickOutSideMobileTabMenu);
    } else {
      closeMobileTabMenu();
    }
  }
});

function clickOutSideMobileTabMenu(e) {
  if (e.target === overlay) {
    closeMobileTabMenu();
    window.removeEventListener('click', clickOutSideMobileTabMenu);
  }
}
