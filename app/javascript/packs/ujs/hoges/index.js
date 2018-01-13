import $ from '../../jquery-csrf'
// import axios from '../../axios-csrf'


$.ajax({
  url: '/ujs/hoges/post',
  method: 'POST',
  dataType: 'json',
  success: (response) => {
    console.log(response);
  }
});

// axios.post('/csrf/hoges/post').then((res) => {
//   console.log(res)
// }).catch((e) => {
//   console.log(e)
// });
