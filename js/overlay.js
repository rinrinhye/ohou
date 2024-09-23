import { addClassList, removeClassList } from './utils/classlist.js';

export const overlay = document.querySelector('.overlay');

export function openOverlay() {
  addClassList(overlay, 'on');
}

export function closeOverlay() {
  removeClassList(overlay, 'on');
}
