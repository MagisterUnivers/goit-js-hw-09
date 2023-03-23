import Notiflix from 'notiflix';

refs = {
  form: document.querySelector('.form'),
  InputF: document.querySelector('input[name="delay"'),
  inputS: document.querySelector('input[name="step"]'),
  inputA: document.querySelector('input[name="amount"]'),
  submitBtn: document.querySelector('button'),
};

let inputes = {
  delay: 0,
  step: 0,
  amount: 0,
};

refs.form.addEventListener('input', e => {
  inputes[e.target.name] = Number(e.target.value);
  console.log(inputes);
});

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  for (let index = 0; index < inputes.amount; index++) {
    let totalStep = inputes.delay + inputes.step * index;

    //  inputes.delay += inputes.step

    createPromise(index, totalStep)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});

/**
  |============================
  | finished
  |============================
*/

// function createPromise(position, delay) {
//   setTimeout(() => {
//     const shouldResolve = Math.random() > 0.3;
//     if (shouldResolve) {
//       return Promise.resolve({ position, delay });
//     } else {
//       return Promise.reject({ position, delay });
//     }
//   }, delay);
// }

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// function count() {
//   return {a : b + c, b , c}
// }

// function
// let x = count().a + b

// function
// let x = count();
// x.a + x.aa;
