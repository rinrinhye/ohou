const lnbMenuButton = document.querySelector('.header__lnb-menu-button');
const lnbMenuPopup = document.querySelector('.lnb-menu-popup');

const toggleLnbMenuPopup = () => {
  if (!lnbMenuPopup.classList.contains('on')) {
    oepnLnbMenuPopup();
    window.addEventListener('click', clickOutsideLnbMenuButton);
  } else {
    closeLnbMenuPopup();
  }
};

const oepnLnbMenuPopup = () => {
  lnbMenuPopup.classList.add('on');
};

const closeLnbMenuPopup = () => {
  lnbMenuPopup.classList.remove('on');
};

function clickOutsideLnbMenuButton(e) {
  if (!e.target.classList.contains('header__lnb-menu-button')) {
    closeLnbMenuPopup();
    window.removeEventListener('click', clickOutsideLnbMenuButton);
  }
}

lnbMenuButton.addEventListener('click', toggleLnbMenuPopup);
