const productCategoryControlSlide = new Swiper(
  '.product-category-control-slide__wrapper',
  {
    slidesPerView: 'auto',
    spaceBetween: 8,
    watchSlidesProgress: true,
    slidesPerGroupAuto: true,
    on: {
      progress: function (s, progress) {
        const slide = document.querySelector('.product-category-control-slide');
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
    navigation: {
      nextEl: '.product-category-control-slide .slide-next',
      prevEl: '.product-category-control-slide .slide-prev',
    },
  }
);
