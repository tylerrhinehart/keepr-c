import axios from 'axios'

let api = axios.create({
  baseURL: 'http://localhost:5000/api/',
  timeout: 2000,
  withCredentials: true
})


// api.post('account/login', {email: "j@j.com", password: 'Testing123!'}).then(()=>{
api('values').then(d => {
  console.log("Values Controller Data:", d)
})
// })

