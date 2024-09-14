const bannerSlide = new Swiper('.banner-slide__wrapper', {
  autoplay: true,
  loop: true,
  pauseOnMouseEnter: true,
  on: {
    init: (swiper) => {
      const slide = document.querySelector('.banner-slide');
      const currentSlideNumber = slide.querySelector(
        '.banner-slide__current-slide-number'
      );
      const totalSlideNumber = slide.querySelector(
        '.banner-slide__total-slide-number'
      );
      currentSlideNumber.textContent = 1;
      totalSlideNumber.textContent = swiper.slides.length;
    },
    realIndexChange: (swiper) => {
      const slide = document.querySelector('.banner-slide');
      const currentSlideNumber = slide.querySelector(
        '.banner-slide__current-slide-number'
      );
      currentSlideNumber.textContent = swiper.realIndex + 1;
    },
  },
  navigation: {
    nextEl: '.banner-slide .slide-next',
    prevEl: '.banner-slide .slide-prev',
  },
});
