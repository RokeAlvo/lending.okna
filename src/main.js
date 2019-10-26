import './../node_modules/swiper/css/swiper.min.css'
import './main.scss';
import './blocks/feedback-form/feedback-form'
import Swiper from 'swiper';

(function main() {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav')

  if (screen.width <= 1200) {
    nav.classList.toggle('hidden')
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
})()