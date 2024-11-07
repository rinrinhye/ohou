import { showAndHideSlideArrowButtons } from './arrow-button';

const productCategoryControlSlide = new Swiper(
  '.product-category-control-slide__wrapper',
  {
    slidesPerView: 'auto',
    spaceBetween: 8,
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
          '.product-category-control-slide'
        ),
    },
    navigation: {
      nextEl: '.product-category-control-slide .slide-next',
      prevEl: '.product-category-control-slide .slide-prev',
    },
  }
);
