const searchInput = document.querySelector('.header__search-group__input');
const searchHistoryGroup = document.querySelector(
  '.header__search-history-group'
);

searchInput.addEventListener('focus', () =>
  addClassList(searchHistoryGroup, 'on')
);
searchInput.addEventListener('blur', () =>
  removeClassList(searchHistoryGroup, 'on')
);
