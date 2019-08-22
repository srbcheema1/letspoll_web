const initialState = {
  currentUser: {
    user_name:null,
    user_id:null,
    token:null,
    poll_id:null,
    isAdmin:false,
  }
}
  
var user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':

      return {
        ...state,
        currentUser: action.payload
      }
    case 'LOGOUT_USER':
      
      return {
        ...state,
        currentUser: {...initialState},
      }
    default:
      return state;
  }
}

export {
  user_reducer
}