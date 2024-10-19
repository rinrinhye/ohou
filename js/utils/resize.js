export let currentInnerWidth = window.innerWidth;
export let isScreenExpanded;

export function setIsScreenExpanded(value) {
  isScreenExpanded = value;
}

export function updateInnerWidth() {
  if (currentInnerWidth > window.innerWidth) {
    isScreenExpanded = false;
  } else if (currentInnerWidth === window.innerWidth) {
    isScreenExpanded = undefined;
  } else if (currentInnerWidth < window.innerWidth) {
    isScreenExpanded = true;
  }
  currentInnerWidth = window.innerWidth;
}
