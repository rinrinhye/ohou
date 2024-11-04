export let currentScrollY = window.scrollY;
export let scrollState;

export function resetScrollTop(target) {
  target.scrollTop = 0;
}

export function updateScrollState() {
  scrollState = currentScrollY < window.scrollY ? 'down' : 'up';
  currentScrollY = scrollY;
}

export function preventScroll() {
  document.body.style.overflow = 'hidden';
}

export function enableScroll() {
  document.body.style.overflow = '';
}
