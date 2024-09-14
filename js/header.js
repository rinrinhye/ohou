const header = document.querySelector('.header');
const headerTop = document.querySelector('.header__top');
const headerBottom = document.querySelector('.header__bottom');

function hideHeader() {
  addClassList(header, 'hidden');
}

function showHeader() {
  removeClassList(header, 'hidden');
}

function hideHeaderBottom() {
  addClassList(headerBottom, 'hidden');
}

function showHeaderBottom() {
  removeClassList(headerBottom, 'hidden');
}

function toggleHeaderVisibilityOnScroll() {
  const newScrollY = window.scrollY;

  if (isResponsiveSM()) {
    if (newScrollY > currentScrollY && newScrollY !== 0) {
      hideHeader();
    } else {
      showHeader();
    }
  }

  if (isResponsiveSM()) {
    if (newScrollY > currentScrollY) {
      hideHeaderBottom();
    } else {
      showHeaderBottom();
    }
  }

  currentScrollY = newScrollY;
}

function toggleHeaderVisibilityOnResize() {
  if (currentInnerWidth > 768 && header.classList.contains('hidden')) {
    showHeader();
  }

  if (isResponsiveSM()) {
    if (headerBottom.classList.contains('hidden')) {
      hideHeaderBottom();
    }
  }
}

function showHeaderBottomOnMouseenter() {
  if (!isResponsiveSM()) {
    showHeaderBottom();
  }
}

function hideHeaderBottomOnMouseleave() {
  if (!isResponsiveSM() && window.scrollY !== 0) {
    hideHeaderBottom();
  }
}

window.addEventListener('scroll', toggleHeaderVisibilityOnScroll);

window.addEventListener('resize', toggleHeaderVisibilityOnResize);

header.addEventListener('mouseenter', showHeaderBottomOnMouseenter);

header.addEventListener('mouseleave', hideHeaderBottomOnMouseleave);
