import { showAndHideSlideArrowButtons } from './arrow-button';

const todayDealProductSlide = new Swiper('.today-deal-product-slide__wrapper', {
  on: {
    progress: (_, progress) =>
      showAndHideSlideArrowButtons(_, progress, '.today-deal-product-slide'),
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
      a11y: {
        nextSlideMessage: '다음',
        prevSlideMessage: '이전',
      },
      navigation: {
        nextEl: '.today-deal-product-slide .slide-next',
        prevEl: '.today-deal-product-slide .slide-prev',
      },
    },
  },
});
