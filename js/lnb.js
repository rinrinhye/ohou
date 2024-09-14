const lnbMenuPopupMenuList = document.querySelector(
  '.lnb-menu-popup__menu-list'
);

const lnbMenuList = document.querySelector('.header__lnb-list');
const lnbMenuItems = document.querySelectorAll('.header__lnb-item');
let hiddenMenuItemArray = [];

lnbMenuTextArray = [];

// lnbMenuItems.forEach((menuItem) => {
//   lnbMenuTextArray = [...lnbMenuTextArray, menuItem.innerText];
// });

// lnbMenuButton.addEventListener('click', () => {
//   if (window.innerWidth > 768) {
//     if (!lnbMenuPopup.classList.contains('on')) {
//       openLnbMenuPopup();
//       window.addEventListener('click', clickOutSideLnbMenuPopup);
//     } else {
//       closeLnbMenuPopup();
//     }
//   }
// });

lnbMenuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', changeCurrentLnbMenuItem);
});

function changeCurrentLnbMenuItem(e) {
  e.preventDefault(); // 변경 보여주기 위해서

  const newLnbMenu = e.target.closest('.header__lnb-item');
  if (currentLnbMenu !== newLnbMenu) {
    currentLnbMenu.classList.remove('on');
    newLnbMenu.classList.add('on');
    currentLnbMenu = newLnbMenu;
  } else return;
}

// function makeLnbMenuItem(number) {
//   for (let i = 0; i < number; i++) {
//     const listItem = document.createElement('a');
//     listItem.setAttribute('href', '');
//     listItem.classList.add('header__lnb-menu-box__item');
//     listItem.innerText = hiddenMenuItemArray[i].innerText;
//     lnbMenuBoxList.appendChild(listItem);
//   }
// }

function removeLnbMenuBoxItems() {
  lnbMenuPopupMenuList.replaceChildren();
}

let currentLnbMenu = document.querySelector('.header__lnb-item.on');

let currentWindowWidth = window.innerWidth;
let currentLength = 0;
const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);

    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        const menuItem = makeLnbMenuItem(entry);
        lnbMenuPopupMenuList.append(menuItem);

        let lnbMenuBoxItems = document.querySelectorAll(
          '.lnb-menu-popup__menu-item'
        );
      } else {
        let lnbMenuBoxItems = document.querySelectorAll(
          '.lnb-menu-popup__menu-item'
        );

        const deleteItem = Array.from(lnbMenuPopupMenuList).filter(
          (menuItem) => {
            return menuItem.innerText === entry.target.innerText;
          }
        );

        lnbMenuPopupMenuList.forEach((menuItem) => {
          console.log('지우고잇당');
          menuItem.innerText === deleteItem[0]?.innerText
            ? menuItem.remove()
            : null;
        });
      }
    });
  },
  {
    threshold: 1,
  }
);

// lnbMenuItems.forEach((menuItem) => {
//   observer.observe(menuItem);
// });

// function makeLnbMenuItem(entry) {
//   const menuItem = document.createElement('a');
//   menuItem.textContent = entry.target.innerText;
//   menuItem.classList.add('lnb-menu-popup__menu-item');
//   return menuItem;
// }
