window.addEventListener('resize', () => {
  const currentInnerWidth = window.innerWidth;
  const maxXLWidth = 1280;

  if (currentInnerWidth < 1280) {
    popularSearchTermsPopup.style.transform = `translateX(0)`;
    lnbMenuPopup.style.transform = `translateX(0)`;
    writeListPopup.style.transform = `translateX(0)`;
  } else if (currentInnerWidth >= 1280) {
    popularSearchTermsPopup.style.transform = `translateX(-${
      (currentInnerWidth - maxXLWidth) / 2
    }px)`;
    lnbMenuPopup.style.transform = `translateX(-${
      (currentInnerWidth - maxXLWidth) / 2
    }px)`;
    writeListPopup.style.transform = `translateX(-${
      (currentInnerWidth - maxXLWidth) / 2
    }px)`;
  }
});

window.addEventListener('load', () => {
  const currentInnerWidth = window.innerWidth;
  const maxXLWidth = 1280;

  if (currentInnerWidth < 1280) {
    popularSearchTermsPopup.style.transform = `translateX(0)`;
    lnbMenuPopup.style.transform = `translateX(0)`;
    writeListPopup.style.transform = `translateX(0)`;
  } else if (currentInnerWidth >= 1280) {
    popularSearchTermsPopup.style.transform = `translateX(-${
      (currentInnerWidth - maxXLWidth) / 2
    }px)`;
    lnbMenuPopup.style.transform = `translateX(-${
      (currentInnerWidth - maxXLWidth) / 2
    }px)`;
    writeListPopup.style.transform = `translateX(-${
      (currentInnerWidth - maxXLWidth) / 2
    }px)`;
  }
});
