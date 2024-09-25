import { resetInputValue } from './utils/input.js';
import { openOverlay, closeOverlay } from './overlay.js';
import { addClassList, removeClassList } from './utils/classlist.js';
import { enableScroll, preventScroll } from './utils/scroll.js';

const searchButton = document.querySelector('.header__search-button');
const searchDrawer = document.querySelector('.search-drawer');
const searchDrawerCloseButton = document.querySelector(
  '.search-drawer__close-button'
);
const searchDrawerInput = document.querySelector('.search-drawer__input');
const searchDrawerInputDeleteButton = document.querySelector(
  '.search-drawer__input-delete-button'
);

function openSearchDrawer() {
  addClassList(searchDrawer, 'on');
  openOverlay();
  window.addEventListener('click', clickOverlay);
  preventScroll();
}

function closeSearchDrawer() {
  removeClassList(searchDrawer, 'on');
  closeOverlay();
  enableScroll();
}

function clickOverlay(e) {
  if (e.target.classList.contains('overlay')) {
    closeSearchDrawer();
    window.removeEventListener('click', clickOverlay);
  }
}

function toggleSearchDrawerInputDeleteButton(e) {
  if (e.target.value.length >= 1) {
    addClassList(searchDrawerInputDeleteButton, 'on');
  }

  if (e.target.value.length === 0) {
    removeClassList(searchDrawerInputDeleteButton, 'on');
  }
}

function resetsearchDrawerInput() {
  resetInputValue(searchDrawerInput);
  removeClassList(searchDrawerInputDeleteButton, 'on');
}

searchButton.addEventListener('click', openSearchDrawer);
searchDrawerCloseButton.addEventListener('click', closeSearchDrawer);

searchDrawer.addEventListener('input', toggleSearchDrawerInputDeleteButton);

searchDrawerInputDeleteButton.addEventListener('click', resetsearchDrawerInput);
