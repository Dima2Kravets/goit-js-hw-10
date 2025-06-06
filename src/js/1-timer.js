import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('.timer-btn');
const timer = document.querySelector('.timer');
let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= Date.now()) {
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      btnStart.setAttribute('disabled', true);
      return;
    }
    btnStart.removeAttribute('disabled');

    userSelectedDate = selectedDates[0];
    console.log(userSelectedDate);
  },
};
flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = String(Math.floor(ms / day)).padStart(2, '0');
  // Remaining hours
  const hours = String(Math.floor((ms % day) / hour)).padStart(2, '0');
  // Remaining minutes
  const minutes = String(Math.floor(((ms % day) % hour) / minute)).padStart(
    2,
    '0'
  );
  // Remaining seconds
  const seconds = String(
    Math.floor((((ms % day) % hour) % minute) / second)
  ).padStart(2, '0');

  return { days, hours, minutes, seconds };
}

btnStart.addEventListener('click', () => {
  btnStart.setAttribute('disabled', true);
  input.setAttribute('disabled', true);
  const timeCounter = setInterval(() => {
    const now = Date.now();
    const deltaTime = userSelectedDate - now;
    if (deltaTime <= 0) {
      clearInterval(timeCounter);
      timer.innerHTML = `
        <div class="field"><span class="value">00</span><span class="label">Days</span></div>
        <div class="field"><span class="value">00</span><span class="label">Hours</span></div>
        <div class="field"><span class="value">00</span><span class="label">Minutes</span></div>
        <div class="field"><span class="value">00</span><span class="label">Seconds</span></div>`;
      input.removeAttribute('disabled');
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    timer.innerHTML = `
      <div class="field"><span class="value">${days}</span><span class="label">Days</span></div>
      <div class="field"><span class="value">${hours}</span><span class="label">Hours</span></div>
      <div class="field"><span class="value">${minutes}</span><span class="label">Minutes</span></div>
      <div class="field"><span class="value">${seconds}</span><span class="label">Seconds</span></div>`;
  }, 1000);
});
