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
