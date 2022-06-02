import '../sass/index.scss'

 const refs = {
     startBtn: document.querySelector('button[data-start]'),
     stopBtn: document.querySelector('button[data-stop]'),
     body: document.querySelector('body')
 }


 let changeInterval = null

 refs.startBtn.addEventListener('click', changeColorRandom) 

  function changeColorRandom () {
    refs.startBtn.disabled = true
    refs.startBtn.classList.add('active')
    refs.stopBtn.classList.remove('active')
         changeInterval = setInterval(() => {
         refs.body.style.backgroundColor =  getRandomHexColor()
     }, 1000);
  }
 
refs.stopBtn.addEventListener('click', () => {
  refs.startBtn.disabled = false;
  refs.startBtn.classList.remove('active')
  refs.stopBtn.classList.add('active')
  clearInterval(changeInterval);
})

 
 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


 