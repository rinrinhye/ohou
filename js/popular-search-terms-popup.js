import { addClassList, removeClassList } from './utils/classlist.js';
import { popupState } from './all-resize-event.js';

const popularSearchTermsButton = document.querySelector(
  '.header__popular-search-terms__button'
);
const popularSearchTermsPopup = document.querySelector(
  '.popular-search-terms-popup'
);
const popularSearchTermsPopupCloseButton = document.querySelector(
  '.popular-search-terms-popup__close-button'
);

function openPopularSearchTermsBox() {
  addClassList(popularSearchTermsPopup, 'on');
  popupState.searchTermsPopup = true;
  window.addEventListener('click', clickOutSidePopularSearchTermsBox);
}

function closePopularSearchTermsBox() {
  removeClassList(popularSearchTermsPopup, 'on');
  popupState.searchTermsPopup = false;
}

function clickOutSidePopularSearchTermsBox(e) {
  if (!e.target.classList.contains('header__popular-search-terms__button')) {
    closePopularSearchTermsBox();
    window.removeEventListener('click', clickOutSidePopularSearchTermsBox);
  }
}

popularSearchTermsButton.addEventListener('click', openPopularSearchTermsBox);
popularSearchTermsPopupCloseButton.addEventListener(
  'click',
  closePopularSearchTermsBox
);
