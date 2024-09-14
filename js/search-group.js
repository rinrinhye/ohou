const searchInput = document.querySelector('.header__search-group__input');
const searchHistoryGroup = document.querySelector(
  '.header__search-history-group'
);

searchInput.addEventListener('focus', openSearchHistoryGroup);
searchInput.addEventListener('blur', closeSearchHistoryGroup);

function openSearchHistoryGroup() {
  searchHistoryGroup.classList.add('on');
}

function closeSearchHistoryGroup() {
  searchHistoryGroup.classList.remove('on');
}
