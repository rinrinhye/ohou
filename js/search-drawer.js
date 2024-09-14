const searchButton = document.querySelector('.header__search-button');
const searchDrawer = document.querySelector('.search-drawer');
const searchDrawerCloseButton = document.querySelector(
  '.search-drawer__close-button'
);
const overlay = document.querySelector('.overlay');
const searchDrawerInput = document.querySelector('.search-drawer__input');
const searchDrawerInputDeleteButton = document.querySelector(
  '.search-drawer__input-delete-button'
);

const openSearchDrawer = () => {
  searchDrawer.classList.add('on');
  overlay.classList.add('on');
  window.addEventListener('click', clickOverlay);
};

const closeSearchDrawer = () => {
  searchDrawer.classList.remove('on');
  overlay.classList.remove('on');
};

const clickOverlay = (e) => {
  if (e.target.classList.contains('overlay')) {
    closeSearchDrawer();
    window.removeEventListener('click', clickOverlay);
  }
};

searchButton.addEventListener('click', openSearchDrawer);
searchDrawerCloseButton.addEventListener('click', closeSearchDrawer);

searchDrawer.addEventListener('input', (e) => {
  if (
    e.target.value.length >= 1 &&
    !searchDrawerInputDeleteButton.classList.contains('on')
  ) {
    searchDrawerInputDeleteButton.classList.add('on');
  }

  if (e.target.value.length === 0) {
    searchDrawerInputDeleteButton.classList.remove('on');
  }
});
