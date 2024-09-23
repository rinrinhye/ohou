import { addClassList, removeClassList } from './utils/classlist.js';

const lnbMenuList = document.querySelector('.header__lnb-list.on');
const lnbMenuItems = lnbMenuList.querySelectorAll('.header__lnb-item');

let currentLnbMenu = document.querySelector(
  '.header__lnb-list.on .header__lnb-item.on'
);

function changeCurrentLnbMenuItem(e) {
  e.preventDefault(); // 변경 보여주기 위해서

  const newLnbMenu = e.target.closest('.header__lnb-item');
  if (currentLnbMenu !== newLnbMenu) {
    removeClassList(currentLnbMenu, 'on');
    addClassList(newLnbMenu, 'on');
    currentLnbMenu = newLnbMenu;
  } else return;
}

lnbMenuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', changeCurrentLnbMenuItem);
});
