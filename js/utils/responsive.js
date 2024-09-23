import { currentInnerWidth } from './resize.js';

export function isResponsiveSM() {
  return currentInnerWidth < 768 ? true : false;
}

export function isResponsiveMD() {
  return currentInnerWidth >= 768 && currentInnerWidth < 1024 ? true : false;
}

export function isResponsiveLG() {
  return currentInnerWidth >= 1024 && currentInnerWidth < 1280 ? true : false;
}

export function isResponsiveXL() {
  return currentInnerWidth >= 1280 ? true : false;
}
