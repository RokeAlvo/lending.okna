import './feedback-form.scss'
import './../input-text/input-text'
import './../button/button'

(function (){
  const forms = document.querySelectorAll('.feedback-form');
  Array.from(forms).forEach(form=>{
    form.addEventListener('submit', e=>{
      e.preventDefault()
      const input = e.target.querySelector('input')
      console.log('телефон', input.value)
    })
  })
})()