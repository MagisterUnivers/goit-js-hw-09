import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

inputEl = document.getElementById('datetime-picker');
startBtn = document.querySelector('[data-start]');

refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let timeLeft = 0;
let timer = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates);
    timeLeft = selectedDates[0].getTime(); // selectedDates[0].getTime() - options.defaultDate.getTime()

    if (timeLeft <= 0) startBtn.disabled = true;
  },
};

startBtn.addEventListener('click', () => {
  setInterval(() => {
    let count = timeLeft - Date.now();
    // timeLeft -= Date.now();
    console.log(timeLeft);
    let resultHowManyTo = convertMs(timeLeft);
    console.log(resultHowManyTo);

    refs.days.innerHTML = `${resultHowManyTo.formattedDays}`;
    refs.hours.innerHTML = `${resultHowManyTo.formattedHours}`;
    refs.minutes.innerHTML = `${resultHowManyTo.formattedMinutes}`;
    refs.seconds.innerHTML = `${resultHowManyTo.formattedSeconds}`;
  }, 1000);
});

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

flatpickr(inputEl, options);
// flatpickr(inputEl, {options}); прикольный способ

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
