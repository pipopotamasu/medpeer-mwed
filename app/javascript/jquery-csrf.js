import $ from 'jquery'
import { csrfToken } from 'rails-ujs'

$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': csrfToken()
  }
})

export default $;
