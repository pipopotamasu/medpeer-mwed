// import axios from 'axios'
import $ from 'jquery-csrf'

$.ajax({
  url: '/csrf/hoges/post',
  method: 'POST',
  dataType: 'json',
  success: (response) => {
    console.log(response);
  }
});

// axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()
//
// axios.post('/csrf/hoges/post').then((res) => {
//   console.log(res)
// }).catch((e) => {
//   console.log(e)
// });
