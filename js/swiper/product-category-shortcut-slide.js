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
