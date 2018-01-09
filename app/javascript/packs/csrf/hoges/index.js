import axios from 'axios'
import { csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

axios.post('/csrf/hoges/post').then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e)
});
