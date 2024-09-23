const productCategoryShortcutSlide = new Swiper(
  '.product-category-shortcut-slide__wrapper',
  {
    slidesPerView: 'auto',
    spaceBetween: 12,
    watchSlidesProgress: true,
    slidesPerGroupAuto: true,
    on: {
      progress: (swiper, progress) =>
        showAndHideSlideArrowButtons(
          swiper,
          progress,
          '.product-category-shortcut-slide'
        ),
    },
    navigation: {
      nextEl: '.product-category-shortcut-slide .slide-next',
      prevEl: '.product-category-shortcut-slide .slide-prev',
    },
  }
);

function showAndHideSlideArrowButtons(swiper, progress, className) {
  const slide = document.querySelector(className);
  const prevButton = slide.querySelector('.slide-prev');
  const nextButton = slide.querySelector('.slide-next');

  if (progress === 0) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'block';
  }

  if (progress > 0) {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
  }

  if (progress === 1) {
    nextButton.style.display = 'none';
  }
}
