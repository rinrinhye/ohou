let timer;

onmessage = function (e) {
  if (e.data.type === 'start') {
    timerStart();
  }
  if (e.data.type === 'end') {
    clearInterval(timer);
    close();
  }
};

function timerStart() {
  postMessage(getRemainingTime());

  timer = setInterval(() => {
    postMessage(getRemainingTime());
  }, 1000);
}

function getRemainingTime() {
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentSeconds = now.getSeconds();

  const hours =
    currentHours === 0 ? '23' : (23 - currentHours).toString().padStart(2, '0');

  const minutes = (59 - currentMinutes).toString().padStart(2, '0');

  const seconds = (59 - currentSeconds).toString().padStart(2, '0');

  return { hours, minutes, seconds };
}
