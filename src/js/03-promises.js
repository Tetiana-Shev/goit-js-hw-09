import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  let delay = Number(document.querySelector('[name="delay"]').value);
  let step = Number(document.querySelector('[name="step"]').value);
  let amount = Number(document.querySelector('[name="amount"]').value);

  if (delay >= 0 && step >= 0) {
    for (let position = 1; position <= amount; position += 1) {
      createPromise(position, delay)
        .then(({ position, delay }) =>
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`,
          )
        )
        .catch(({ position, delay }) =>
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`,
          )
        );
      delay += step;
    }
  } else {
    window.alert("Всі значення у полях не повинні бути від'ємними");
    return;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}
