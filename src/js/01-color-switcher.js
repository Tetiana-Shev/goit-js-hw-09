function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timer = {
  intervalId: null,
  isActive: false,
};

startBtn.addEventListener('click', () => {
  if (timer.isActive) {
    startBtn.disabled = false;
  }
  startBtn.disabled = true;
  timer.intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timer.intervalId);
  startBtn.disabled = false;
});
