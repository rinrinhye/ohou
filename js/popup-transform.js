function popupTransform() {
  const maxXLWidth = 1280;

  if (!isResponsiveXL()) {
    applyCssTranslateX(popularSearchTermsPopup, 0);
    applyCssTranslateX(lnbMenuPopup, 0);
    applyCssTranslateX(writeListPopup, 0);
  } else if (isResponsiveXL()) {
    const value = (currentInnerWidth - maxXLWidth) / 2;

    applyCssTranslateX(popularSearchTermsPopup, value);
    applyCssTranslateX(lnbMenuPopup, value);
    applyCssTranslateX(writeListPopup, value);
  }
}

window.addEventListener('load', popupTransform);
window.addEventListener('resize', popupTransform);
