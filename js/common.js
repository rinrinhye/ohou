const overlay = document.querySelector('.overlay');
let currentInnerWidth = window.innerWidth;
let currentScrollY = window.scrollY;

function addClassList(target, className) {
  target.classList.add(className);
}
function removeClassList(target, className) {
  target.classList.remove(className);
}

function openOverlay() {
  overlay.classList.add('on');
}

function closeOverlay() {
  overlay.classList.remove('on');
}

function updateInnerWidth() {
  currentInnerWidth = window.innerWidth;
}

function isResponsiveSM() {
  return currentInnerWidth < 768 ? true : false;
}

function isResponsiveXL() {
  return currentInnerWidth >= 1280 ? true : false;
}

function applyCssTranslateX(target, value) {
  target.style.transform = `translateX(-${value}px)`;
}

function showAndHideSlideArrowButtons(swiper, progress, className) {
  const slide = document.querySelector(className);
  const prevButton = slide.querySelector('.slide-prev');
  const nextButton = slide.querySelector('.slide-next');

  if (progress === 0) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'block';
  }

  if (progress > 0) {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
  }

  if (progress === 1) {
    nextButton.style.display = 'none';
  }
}

window.addEventListener('resize', updateInnerWidth);
