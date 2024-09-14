const header = document.querySelector('.header');
const headerBottom = document.querySelector('.header__bottom');
let scrollY = window.scrollY;
let innerWidth = window.innerWidth;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (window.innerWidth <= 768) {
    if (currentScrollY > scrollY) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
  }

  if (window.innerWidth > 768) {
    if (currentScrollY > scrollY) {
      headerBottom.classList.add('hidden');
    } else {
      headerBottom.classList.remove('hidden');
    }
  }

  scrollY = currentScrollY;
});

window.addEventListener('resize', () => {
  let currentInnerWidth = window.innerWidth;
  if (currentInnerWidth > 768 && header.classList.contains('hidden')) {
    header.classList.remove('hidden');
  }

  if (currentInnerWidth < 768) {
    if (headerBottom.classList.contains('hidden')) {
      headerBottom.classList.remove('hidden');
    }
  }

  innerWidth = currentInnerWidth;
});

const headerTop = document.querySelector('.header-top');

header.addEventListener('mouseenter', () => {
  if (window.innerWidth > 768) {
    headerBottom.classList.remove('hidden');
  }
});

header.addEventListener('mouseleave', () => {
  if (window.innerWidth > 768 && window.scrollY !== 0) {
    headerBottom.classList.add('hidden');
  }
});
