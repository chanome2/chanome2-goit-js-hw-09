
// Initialize Notiflix
Notiflix.Notify.Init({ position: 'right-bottom' });

// Function to create a promise with random fulfillment/rejection
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const delay = parseInt(form.elements['delay'].value);
    const step = parseInt(form.elements['step'].value);
    const amount = parseInt(form.elements['amount'].value);

    for (let i = 0; i < amount; i++) {
      const currentDelay = delay + i * step;

      try {
        const result = await createPromise(i + 1, currentDelay);
        Notiflix.Notify.Success(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
      } catch (error) {
        Notiflix.Notify.Failure(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
      }
    }
  });
});
