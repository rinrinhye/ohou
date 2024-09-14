const todayDealProductSlide = new Swiper('.today-deal-product-slide__wrapper', {
  on: {
    progress: function (s, progress) {
      const slide = document.querySelector('.today-deal-product-slide');
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
    },
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
