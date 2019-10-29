import './feedback-form.scss'
import './../input-text/input-text'
import './../button/button'

const API='';
const PRESENTATION_URL='http://example.com/a.txt';

(function (){
  const forms = document.querySelectorAll('.feedback-form');
  Array.from(forms).forEach(form=>{
    form.addEventListener('submit', e=>{
      e.preventDefault()
      const thanksForms = document.querySelectorAll('.feedback-form__thanks')
      Array.from(thanksForms).forEach(thanksForm=>{
        thanksForm.classList.toggle('hidden')
      })
      Array.from(forms).forEach(form=>{
        form.classList.toggle('feedback-form_hidden')
      })

      const phone = e.target.querySelector('input[type=tel]').value
      const cityInput = e.target.querySelector('input[type=city]')
      const city = cityInput ? cityInput.value : ''

      console.log('телефон', phone)
      console.log('city', city)
      downloadFile(PRESENTATION_URL, name='okna')

    })
  })
})()
function downloadFile(url, name = 'file', type = 'text/plain') {
  // const { createElement } = document
  // const { URL: { createObjectURL, revokeObjectURL }, setTimeout } = window

  // const blob = new Blob([data], { type })
  // const url = createObjectURL(blob)

  const anchor = createElement('a')
  anchor.setAttribute('href', url)
  anchor.setAttribute('download', name)
  anchor.click()

  setTimeout(() => { revokeObjectURL(url) }, 100)
}
