import { addClassList, removeClassList } from './utils/classlist.js';
import { popupState } from './all-resize-event.js';

const writeButton = document.querySelector('.header__write-button');
const writeListPopup = document.querySelector('.write-list-popup');

function openWriteListPopup() {
  addClassList(writeListPopup, 'on');
  window.addEventListener('click', clickOutsideWriteListPopup);
  popupState.writeListPopup = true;
}

function closeWriteListPopup() {
  removeClassList(writeListPopup, 'on');
  popupState.writeListPopup = false;
}

const toggleWriteListPopup = () => {
  if (!writeListPopup.classList.contains('on')) {
    openWriteListPopup();
  } else if (writeListPopup.classList.contains('on')) {
    closeWriteListPopup;
  }
};

const clickOutsideWriteListPopup = (e) => {
  if (e.target !== writeButton) {
    closeWriteListPopup();
  }
};

writeButton.addEventListener('click', toggleWriteListPopup);
