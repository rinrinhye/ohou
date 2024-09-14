const writeButton = document.querySelector('.header__write-button');
const writeListPopup = document.querySelector('.write-list-popup');

const toggleWriteListPopup = () => {
  if (!writeListPopup.classList.contains('on')) {
    addClassList(writeListPopup, 'on');
    window.addEventListener('click', clickOutsideWriteListPopup);
  } else if (writeListPopup.classList.contains('on')) {
    removeClassList(writeListPopup, 'on');
  }
};

const clickOutsideWriteListPopup = (e) => {
  if (e.target !== writeButton) {
    removeClassList(writeListPopup, 'on');
  }
};

writeButton.addEventListener('click', toggleWriteListPopup);
