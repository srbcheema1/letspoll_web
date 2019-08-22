import decode from 'jwt-decode';

import api_fetch from './auth';
import { server_url, user_token } from './constants';

var login = (username, password, poll_id) => {
  var url = `${server_url}/auth/login/`;
  var data = {
    'username':username,
    'password':password,
    'poll_id':poll_id,
  }
  data = JSON.stringify(data);
  
  return api_fetch(url, { // Your POST endpoint
    method: 'POST',
    body:data
  }).then(
    success => {
        if(success['token']){
          console.log('logged in');
        } else {
          console.log('unable to log in');
        }
        return success;
    }
  ).catch(
    error => console.log(error) // Handle the error response object
  )
}

var isTokenExpired = (token) => {
  try {
      if (token.exp < Date.now() / 1000) { // Checking if token is expired.
        return true;
      } else {
        return false;
      }
  } catch (err) {
      return true;
  }
}

var get_token = () => {
  return localStorage.getItem(user_token);
}

// can also be used to check if user is logged in or not
var get_decoded_token = () => {
  try{
    const decoded = decode(get_token());
    if(isTokenExpired(decoded)) {
      return null;
    }
    return decoded;
  } catch {
    console.log('bad token');
  }
}

export {
  get_token,
  get_decoded_token,
  login,
}
export default login;