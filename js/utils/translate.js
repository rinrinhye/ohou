export function applyCssTranslateX(target, x) {
  target.style.transform = `translateX(-${x}px)`;
}

export function applyCssTranslateY(target, y) {
  target.style.transform = `translateY(${y}px)`;
}

export function applyCssTranslate(target, x, y) {
  target.style.transform = `translate(-${x}px,${y}px)`;
}
