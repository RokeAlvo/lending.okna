import './input-text.scss'

import Inputmask from "inputmask";
// import "inputmask/lib/extensions/inputmask.numeric.extensions";

(function (){
  const selectors = document.querySelectorAll('input[type=tel]');
  Array.from(selectors).forEach(selector=>{
    Inputmask({"mask": "+7(999) 999-99-99"}).mask(selector);
  })
})()