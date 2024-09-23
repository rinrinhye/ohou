const timeBadges = document.querySelectorAll('.badge--time');

const worker = new Worker('js/worker.js');

timeBadges.forEach((badge) => {
  const hours = new Date().getHours().toString().padStart(2, '0');
  const minutes = new Date().getMinutes().toString().padStart(2, '0');
  const seconds = new Date().getSeconds().toString().padStart(2, '0');
  badge.innerText = `${hours}:${minutes}:${seconds} 남음`;
});

worker.postMessage({ type: 'start' });

worker.onmessage = function (e) {
  const { hours, minutes, seconds } = e.data;
  if (hours === '00' && minutes === '00' && seconds === '00') {
    timeBadges.forEach((badge) => {
      badge.innerText = `마감`;
    });
    this.postMessage({ type: 'end' });
  } else {
    timeBadges.forEach((badge) => {
      badge.innerText = `${hours}:${minutes}:${seconds} 남음`;
    });
  }
};
