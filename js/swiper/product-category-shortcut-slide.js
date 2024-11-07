import { showAndHideSlideArrowButtons } from './arrow-button';

const productCategoryShortcutSlide = new Swiper(
  '.product-category-shortcut-slide__wrapper',
  {
    slidesPerView: 'auto',
    spaceBetween: 12,
    watchSlidesProgress: true,
    slidesPerGroupAuto: true,
    a11y: {
      nextSlideMessage: '다음',
      prevSlideMessage: '이전',
    },
    on: {
      progress: (_, progress) =>
        showAndHideSlideArrowButtons(
          _,
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
