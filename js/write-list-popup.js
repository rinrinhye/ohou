const writeButton = document.querySelector('.header__write-button');
const writeListPopup = document.querySelector('.write-list-popup');

const toggleWriteListPopup = () => {
  if (!writeListPopup.classList.contains('on')) {
    writeListPopup.classList.add('on');
    window.addEventListener('click', clickOutsideWriteListPopup);
  } else if (writeListPopup.classList.contains('on')) {
    writeListPopup.classList.remove('on');
  }
};

const clickOutsideWriteListPopup = (e) => {
  if (e.target !== writeButton) {
    writeListPopup.classList.remove('on');
  }
};

writeButton.addEventListener('click', toggleWriteListPopup);
