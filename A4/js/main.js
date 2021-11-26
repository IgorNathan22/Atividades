import {masks} from '.modules/mask.js'
import {valid} from '.modules/valid.js'
import { valida_cep } from './modules/valid'

document.querySelectorAll('input.mask').forEach($input => {
    const field = $input.dataset.js

    $input.addEventListener('input', e => {
      e.target.value = masks[field](e.target.value)
    }, false)
})

  
  