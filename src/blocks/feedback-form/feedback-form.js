import './feedback-form.scss'
import './../input-text/input-text'
import './../button/button'

const API = 'partner-requests/';
const PRESENTATION_URL = 'http://example.com/a.txt';
const FILE_NAME = 'filename';

(function () {
  const forms = document.querySelectorAll('.feedback-form');
  const closeButtons = document.querySelectorAll('.feedback-form__close')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault()
      const thanksForms = document.querySelectorAll('.feedback-form__thanks');
      Array.from(thanksForms).forEach(thanksForm => {
        thanksForm.classList.toggle('hidden');
      })
      Array.from(forms).forEach(form => {
        form.classList.toggle('feedback-form_hidden');
      })

      const phone = e.target.querySelector('input[type=tel]').value
      const cityInput = e.target.querySelector('input[type=city]');
      const city = cityInput ? cityInput.value : '';
      let id = null;
      switch (form.id) {
        case 'feedback-form1':
          id = 1
          break;
        case 'feedback-form2':
          id = 2
          break;
        case 'feedback-form-modal':
          id = 3
          break;
        default:
          id=0;
          break;
      }
      fetch(API, {
        method: 'POST', body: JSON.stringify({
          city: city,
          phone: phone,
          id: id
        }), headers: { 'content-type': 'application/json' }
      })
        .then(() => {
          downloadFile(PRESENTATION_URL, name = 'okna');
        })

    })
  });

  Array.from(closeButtons).forEach(button => {
    button.addEventListener('click', e => {

      button.parentNode.classList.toggle('hidden')
      document.querySelector('.feedback-form__modal-bg').classList.toggle('hidden')
    })
  })
})()
function downloadFile(url, name = FILE_NAME, type = 'text/plain') {
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
