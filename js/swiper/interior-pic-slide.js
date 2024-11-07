import { showAndHideSlideArrowButtons } from './arrow-button';

const interiorPicSlide = new Swiper('.interior-pic-slide__wrapper', {
  slidesPerView: 2.5,
  spaceBetween: 12,
  navigation: {
    nextEl: '.interior-pic-slide .slide-next',
    prevEl: '.interior-pic-slide .slide-prev',
  },
  a11y: {
    nextSlideMessage: '다음',
    prevSlideMessage: '이전',
  },
  on: {
    progress: (_, progress) =>
      showAndHideSlideArrowButtons(_, progress, '.interior-pic-slide'),
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1025: {
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
  },
});
