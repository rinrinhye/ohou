const interiorPicSlide = new Swiper('.interior-pic-slide__wrapper', {
  slidesPerView: 3,
  spaceBetween: 12,
  navigation: {
    nextEl: '.interior-pic-slide .slide-next',
    prevEl: '.interior-pic-slide .slide-prev',
  },
  on: {
    progress: function (s, progress) {
      const slide = document.querySelector('.interior-pic-slide');
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
    },
    1025: {
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
  },
});

interiorPicSlide.on();
