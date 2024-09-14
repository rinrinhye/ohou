const popularSearchTermsButton = document.querySelector(
  '.header__popular-search-terms__button'
);
const popularSearchTermsPopup = document.querySelector(
  '.popular-search-terms-popup'
);

const popularSearchTermsPopupCloseButton = document.querySelector(
  '.popular-search-terms-popup__close-button'
);

popularSearchTermsButton.addEventListener('click', openPopularSearchTermsBox);
popularSearchTermsPopupCloseButton.addEventListener(
  'click',
  closePopularSearchTermsBox
);

function openPopularSearchTermsBox() {
  popularSearchTermsPopup.classList.add('on');
  window.addEventListener('click', clickOutSidePopularSearchTermsBox);
}

function closePopularSearchTermsBox() {
  popularSearchTermsPopup.classList.remove('on');
}

function clickOutSidePopularSearchTermsBox(e) {
  if (!e.target.classList.contains('header__popular-search-terms__button')) {
    closePopularSearchTermsBox();
    window.removeEventListener('click', clickOutSidePopularSearchTermsBox);
  }
}
