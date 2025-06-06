import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const { delay, state } = event.target.elements;
  const deleyValue = +delay.value;
  const stateValue = state.value;
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      if (stateValue === 'fulfilled') {
        resolve('Fulfilled');
      } else {
        reject('Rejected');
      }
    })
      .then(data => {
        iziToast.success({
          title: 'OK',
          message: `${data} promise in ${deleyValue}ms`,
          position: 'topRight',
        });
      })
      .catch(data => {
        iziToast.error({
          title: 'Error',
          message: `${data} promise in ${deleyValue}ms`,
          position: 'topRight',
        });
      });
  }, deleyValue);
}
