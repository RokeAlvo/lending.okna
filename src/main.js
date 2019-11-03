import './../node_modules/swiper/css/swiper.min.css'
import './main.scss';
import './blocks/feedback-form/feedback-form'
import Swiper from 'swiper';

const downloadHandler = e=>{
  e.preventDefault()
  const form = document.querySelector('.page__modal-form');
  const bg = document.querySelector('.feedback-form__modal-bg')
  form.style.top=window.pageYOffset + 50 + 'px';
  form.classList.remove('hidden')
  bg.classList.remove('hidden')
}

(function main() {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav')

  if (screen.width <= 1200) {
    nav.classList.toggle('hidden')
    nav.addEventListener('click', (e) => {
      nav.classList.add('hidden')
    })
  }

  burger.addEventListener('click', (e) => {
    nav.classList.toggle('hidden')
  })
  

  const mySwiper = new Swiper('.swiper-container', {

    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  const navDownloadLink = document.querySelector('.header__download-link');
  const downloadButton = document.querySelector("body > div.section6-2__img > div > button");
  navDownloadLink.addEventListener('click', downloadHandler)
  downloadButton.addEventListener('click', downloadHandler )
})()

