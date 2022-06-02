import '../sass/index.scss'
import flatpickr from 'flatpickr'
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    startBtn: document.querySelector('[data-start]'),
    input: document.querySelector('#datetime-picker'),
    day: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    secondes: document.querySelector('[data-seconds]')
}

refs.startBtn.classList.add('active')

refs.startBtn.disabled = true
refs.startBtn.addEventListener('click', () => {
       
        refs.startBtn.classList.add('active')
        refs.startBtn.disabled = true
        timer(new Date(refs.input.value))
   })

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(new Date(refs.input.value) - new Date() < 0){
            window.alert("Please choose a date in the future")
        } else {
            refs.startBtn.classList.remove('active')
            refs.startBtn.disabled = false
        }
      
      console.log(selectedDates[0]);
    },
  };

flatpickr(refs.input, options);


const timer = (targetDate) => {
    
    const intervalId = setInterval(() => {
        const delta = new Date(targetDate) - new Date()
        if(Math.floor(delta/1000) === 0){
            console.log('Астанавитесь')
           clearInterval(intervalId)
        }
        renderTimer(delta) 
        console.log(Math.floor(delta/1000))
    }, 1000);
   
}

function pad(value) {
    return String(value).padStart(2,'0')
}

const renderTimer = (string) => {
    refs.day.innerText = pad(convertMs(string).days) 
    refs.hours.innerText = pad(convertMs(string).hours)
    refs.minutes.innerText = pad(convertMs(string).minutes)
    refs.secondes.innerText = pad(convertMs(string).seconds)
}

 
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
 