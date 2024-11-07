export function showAndHideSlideArrowButtons(_, progress, className) {
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
