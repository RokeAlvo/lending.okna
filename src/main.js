import './main.scss';

(function main(){
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav')

  if (screen.width<=1200) {
    nav.classList.toggle('hidden')
  }

  burger.addEventListener('click', (e)=>{
    nav.classList.toggle('hidden')
  })
})()