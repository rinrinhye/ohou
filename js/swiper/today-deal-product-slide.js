const todayDealProductSlide = new Swiper('.today-deal-product-slide__wrapper', {
  on: {
    progress: (swiper, progress) =>
      showAndHideSlideArrowButtons(
        swiper,
        progress,
        '.today-deal-product-slide'
      ),
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: '.today-deal-product-slide .slide-next',
        prevEl: '.today-deal-product-slide .slide-prev',
      },
    },
  },
});
