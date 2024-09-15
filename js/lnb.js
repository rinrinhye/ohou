const lnbMenuPopupList = document.querySelector('.lnb-menu-popup__list');

const lnbMenuList = document.querySelector('.header__lnb-list');
const lnbMenuItems = document.querySelectorAll('.header__lnb-item');

let currentLnbMenu = document.querySelector('.header__lnb-item.on');

lnbMenuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', changeCurrentLnbMenuItem);
});

function changeCurrentLnbMenuItem(e) {
  e.preventDefault(); // 변경 보여주기 위해서

  const newLnbMenu = e.target.closest('.header__lnb-item');
  if (currentLnbMenu !== newLnbMenu) {
    removeClassList(currentLnbMenu, 'on');
    addClassList(newLnbMenu, 'on');
    currentLnbMenu = newLnbMenu;
  } else return;
}

const lnbMenuPopupItemObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        if (lnbMenuPopup.classList.contains('on')) {
          const newLnbPopupMenuItem = createNewLnbMenuPopupItem();
          newLnbPopupMenuItem.innerText = entry.target.innerText;
          lnbMenuPopupList.prepend(newLnbPopupMenuItem);
        } else {
          const newLnbPopupMenuItem = createNewLnbMenuPopupItem();
          newLnbPopupMenuItem.innerText = entry.target.innerText;
          lnbMenuPopupList.append(newLnbPopupMenuItem);
        }
      } else {
        const lnbMenuPopupItems = document.querySelectorAll(
          '.lnb-menu-popup__item'
        );

        if (lnbMenuPopup.classList.contains('on')) {
          const filteredItem = Array.from(lnbMenuPopupItems).filter((item) => {
            return item.innerText === entry.target.innerText;
          })[0];

          lnbMenuPopupItems.forEach((item) => {
            item.innerText === filteredItem.innerText ? item.remove() : '';
          });
        } else {
          return;
        }
      }
    });
  },
  { threshold: 1 }
);

const headerBottomObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        lnbMenuItems.forEach((item) => {
          lnbMenuPopupItemObserver.observe(item);
        });
      }
      if (!entry.isIntersecting) {
        lnbMenuPopupItemObserver.disconnect();
        lnbMenuPopup.classList.remove('on');
        lnbMenuPopupList.innerText = '';
      }
    });
  },
  {
    threshold: 1,
    rootMargin: '-80px 0px 0px 0px',
  }
);

function createNewLnbMenuPopupItem() {
  const a = document.createElement('a');
  a.setAttribute('href', '');
  addClassList(a, 'lnb-menu-popup__item');
  return a;
}

function hideLnbMenuPopupToScrollDown() {
  const lnbMenuPopup = document.querySelector('.lnb-menu-popup');
  if (currentScrollY < window.scrollY) {
    lnbMenuPopup.classList.remove('on');
  }
}

headerBottomObserver.observe(headerBottom);
window.addEventListener('scroll', hideLnbMenuPopupToScrollDown);
