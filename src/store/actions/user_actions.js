import decode from 'jwt-decode';

import { login, get_decoded_token } from '../../util/login';
import { user_token } from '../../util/constants';


const _logoutUser = () => ({
  type: 'LOGOUT_USER'
})

const _loginUser = (user) => ({
  type:'LOGIN_USER',
  payload:user
})

var logoutUser = () => {
  return dispatch => {
    localStorage.removeItem(user_token);
    dispatch(_logoutUser());
  }
}

var loginUser = (username, password, pollid) => {
  return async dispach => {
    var status = await login(username,password, pollid);
    if(status.token) {
      const decoded = decode(status.token);
      var currentUser= {
        user_name:decoded.username,
        user_id:decoded.user_id,
        poll_id:decoded.poll_id,
        isAdmin:decoded.is_admin,
      }
      localStorage.setItem(user_token, status.token);
      dispach(_loginUser(currentUser));
    }
  }
}

var checkUser = () => {
  return dispatch => {
    const token = get_decoded_token();
    if(token){
      var currentUser= {
        user_name:token.username,
        user_id:token.user_id,
        poll_id:token.poll_id,
        isAdmin:token.is_admin,
      }
      console.log('user logged in',currentUser);
      dispatch(_loginUser(currentUser));
    }
  }
}



export {
  logoutUser,
  loginUser,
  checkUser
}