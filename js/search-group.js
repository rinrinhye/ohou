import { addClassList, removeClassList } from './utils/classlist.js';

const headerSearchInput = document.querySelector(
  '.header__search-group__input'
);
const headerSearchHistoryGroup = document.querySelector(
  '.header__search-history-group'
);
const headerInputDeleteButton = document.querySelector(
  '.header__search-group__input-delete-button'
);

headerSearchInput.addEventListener('focus', () =>
  addClassList(headerSearchHistoryGroup, 'on')
);
headerSearchInput.addEventListener('blur', () =>
  removeClassList(headerSearchHistoryGroup, 'on')
);

function toggleHeaderInputDeleteButton(e) {
  if (e.target.value.length !== 0) {
    addClassList(headerInputDeleteButton, 'on');
  } else {
    removeClassList(headerInputDeleteButton, 'on');
  }
}

function resetHeaderSearchInput() {
  resetInputValue(headerSearchInput);
  removeClassList(headerInputDeleteButton, 'on');
}

headerSearchInput.addEventListener('input', toggleHeaderInputDeleteButton);

headerInputDeleteButton.addEventListener('click', resetHeaderSearchInput);
