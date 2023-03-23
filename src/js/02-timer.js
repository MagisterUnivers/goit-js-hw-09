import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

inputEl = document.getElementById('datetime-picker');
startBtn = document.querySelector('[data-start]');
mainDiv = document.querySelector('.timer');

refs = {
  body: document.querySelector('body'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let count = 0;
let timeLeft = 0;
let timer = null;

const audioStart = new Audio(
  'https://drive.google.com/uc?id=10yOYDe84HgLsUV-7-WdjVS0Qd8eRuI5g'
);
const audioEnd = new Audio(
  // 'https://drive.google.com/file/d/1LH-0o34wJnCJC0uxLd8oglGagFiXsaNh/view?usp=sharing'
  // 'https://drive.google.com/file/d/1HBgNljLk3W1zelvBtkPifX7zH_QIQVxa/view?usp=sharing'
  'https://drive.google.com/uc?id=1T8902AXwNN9XPcr5NfOg13N7r8GUAAwS'
);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timeLeft = selectedDates[0].getTime(); // selectedDates[0].getTime() - options.defaultDate.getTime()

    if (timeLeft <= Date.now()) {
      startBtn.disabled = true;
      // Notiflix.Notify.failure('Please choose a date in the future');
      Notiflix.Confirm.ask(
        '****h, are you blind?',
        'Please, pick up the date in the future',
        '',
        'Ok',
        'Cancel',
        function okCb() {
          alert('😡 YEEEEEEEEEEEEEEEEEES YOU CAN READ!!!!!!!!!! 😡');
        },
        function cancelCb() {
          alert('😪 You wont get a timer then, loser 😪');
        },
        {
          // Custom options
        }
      );
    } else {
      startBtn.disabled = false;
    }
  },
};

startBtn.addEventListener(
  'click',
  () => {
    timer = setInterval(() => {
      audioStart.play();

      refs.body.style.backgroundImage =
        'url(https://media.tenor.com/rec5dlPBK2cAAAAd/mr-bean-waiting.gif)';
      refs.body.style.backgroundSize = 'cover';
      // mainDiv.style.zIndex = '1';

      count = timeLeft - Date.now();
      // timeLeft -= Date.now();

      let resultHowManyTo = convertMs(count);

      refs.days.innerHTML = `${resultHowManyTo.formattedDays}`;
      refs.hours.innerHTML = `${resultHowManyTo.formattedHours}`;
      refs.minutes.innerHTML = `${resultHowManyTo.formattedMinutes}`;
      refs.seconds.innerHTML = `${resultHowManyTo.formattedSeconds}`;

      if (count < 0) {
        clearInterval(timer);
        refs.body.style.backgroundImage = 'none';
        0.0;
        refs.days.innerHTML = '00';
        refs.hours.innerHTML = '00';
        refs.minutes.innerHTML = '00';
        refs.seconds.innerHTML = '00';
        audioStart.pause();
        audioEnd.play();
        audioEnd.currentTime = 0;
        setInterval(function () {
          if (audioEnd.currentTime > 6) {
            audioEnd.pause();
          }
        }, 1000);
      }
    });
  },
  1000
);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  const formattedDays = days.toString().padStart(2, 0);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  const formattedHours = hours.toString().padStart(2, 0);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const formattedMinutes = minutes.toString().padStart(2, 0);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  const formattedSeconds = seconds.toString().padStart(2, 0);

  return { formattedDays, formattedHours, formattedMinutes, formattedSeconds };
}

const calendar = flatpickr(inputEl, options);
// flatpickr(inputEl, {options}); прикольный способ

// // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

/**
  |============================
  | New style 
  |============================
*/

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

// inputEl = document.getElementById('datetime-picker');
// startBtn = document.querySelector('[data-start]');

// refs = {
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };

// let count = 0;
// let timeLeft = 0;
// let flipdown = null;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates);
//     timeLeft = selectedDates[0].getTime(); // selectedDates[0].getTime() - options.defaultDate.getTime()

//     if (timeLeft <= Date.now()) {
//       startBtn.disabled = true;
//       alert('Please choose a date in the future');
//     } else {
//       startBtn.disabled = false;
//       count = timeLeft - Date.now(); // update count variable
//       flipdown = new FlipDown(count);
//       flipdown.start();

//       // call updateTimerDisplay every second
//       setInterval(updateTimerDisplay, 1000);
//     }
//   },
// };

// flatpickr(inputEl, options);

// startBtn.addEventListener('click', () => {
//   console.log(count);
// });

// function updateTimerDisplay() {
//   // calculate remaining time
//   const remainingTime = Math.max(0, timeLeft - Date.now());

//   // calculate days, hours, minutes, seconds
//   const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
//   const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
//   const seconds = Math.floor((remainingTime / 1000) % 60);

//   // update timer display (with optional chaining)
//   if (refs.days) {
//     refs.days.textContent = days;
//   }
//   if (refs.hours) {
//     refs.hours.textContent = hours.toString().padStart(2, '0');
//   }
//   if (refs.minutes) {
//     refs.minutes.textContent = minutes.toString().padStart(2, '0');
//   }
//   if (refs.seconds) {
//     refs.seconds.textContent = seconds.toString().padStart(2, '0');
//   }
// }
