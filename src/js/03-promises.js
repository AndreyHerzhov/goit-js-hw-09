const refs = {
  button: document.querySelector('button'),
  delay: document.querySelector('.delay'),
  step: document.querySelector('.step'),
  amount: document.querySelector('.amount'),
  form: document.querySelector('.form')
}


refs.form.addEventListener('submit', onFormSubmit)
 

function onFormSubmit(e) {
  e.preventDefault()
  let position = 0;
  setTimeout(() => {
  for(let i = 0; i < refs.amount.value; i += 1) {
    const delayStep = +refs.delay.value + +refs.step.value * i
    position = i + 1
    createPromise(position, delayStep)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  })
  }})
  refs.step.value
}
 

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
    if (shouldResolve) {
      // Fulfill
      resolve({ position, delay });
    } else {
      // Reject
      reject({ position, delay });
    }
  },delay)
  })
}