export let currentScrollY = window.scrollY;

export function resetScrollTop(target) {
  target.scrollTop = 0;
}

export function setCurrentScrollY(value) {
  currentScrollY = value;
}

export function isScrollDown() {
  return currentScrollY < window.scrollY ? true : false;
}
