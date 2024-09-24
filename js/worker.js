onmessage = function (e) {
  if (e.data.type === 'end') {
    clearInterval(timer);
    worker.terminate();
  }
};

setTimeout(() => {
  const { hours, minutes, seconds } = getRemainingTimeComponents();

  postMessage({ hours, minutes, seconds });
}, 0);

function timer() {
  const { hours, minutes, seconds } = getRemainingTimeComponents();

  postMessage({ hours, minutes, seconds });
}

setInterval(timer, 1000);

function getRemainingTimeComponents() {
  const currentHours = new Date().getHours();
  const currentMinutes = new Date().getMinutes();
  const currentSeconds = new Date().getSeconds();

  let hours;

  if (currentHours !== 0) {
    hours =
      23 - currentHours === 23
        ? '00'
        : (23 - currentHours).toString().padStart(2, '0');
  } else {
    hours = '23';
  }

  const minutes =
    59 - currentMinutes === 59
      ? '00'
      : (59 - currentMinutes).toString().padStart(2, '0');

  const seconds =
    60 - currentSeconds === 60
      ? '00'
      : (60 - currentSeconds).toString().padStart(2, '0');

  return { hours, minutes, seconds };
}
