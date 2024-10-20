export let currentScrollY = window.scrollY;

export function resetScrollTop(target) {
  target.scrollTop = 0;
}

export function updateCurrentScrollY() {
  currentScrollY = scrollY;
}

export function isScrollDown() {
  return currentScrollY < window.scrollY ? true : false;
}

export function preventScroll() {
  document.body.style.overflow = 'hidden';
}

export function enableScroll() {
  document.body.style.overflow = '';
}
