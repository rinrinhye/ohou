import { showAndHideSlideArrowButtons } from './arrow-button';

const productCategoryControlSlide = new Swiper(
  '.product-category-control-slide__wrapper',
  {
    slidesPerView: 'auto',
    spaceBetween: 8,
    watchSlidesProgress: true,
    slidesPerGroupAuto: true,
    on: {
      progress: (swiper, progress) =>
        showAndHideSlideArrowButtons(
          swiper,
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
