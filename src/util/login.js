import { server_url } from './constants.js';
import decode from 'jwt-decode';
import api_fetch from './auth';

var login = (username, password, poll_id) => {
  var url = `${server_url}/auth/login/`;
  var data = {
    'username':username,
    'password':password,
    'poll_id':poll_id,
  }
  data = JSON.stringify(data);
  
  api_fetch(url, { // Your POST endpoint
    method: 'POST',
    body:data
  }).then(
    success => {
        if(success['token']){
          localStorage.setItem('userid_token', success['token']);// changable
          console.log('logged in');
        } else {
          console.log('unable to log in');
        }
    }
  ).catch(
    error => console.log(error) // Handle the error response object
  )
}

var isTokenExpired = (token) => {
  try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) { // Checking if token is expired.
          return true;
      } else {
        return false;
      }
  } catch (err) {
      return false;
  }
}

var logout = () => {
  localStorage.removeItem('userid_token');
}

var loggedIn = () => {
  const token = localStorage.getItem('userid_token');
  return !!token && !isTokenExpired(token) // handwaiving here
}


export {
  logout,
  loggedIn,
  isTokenExpired
}
export default login;