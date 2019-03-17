import ActionTypes from "../actions/ActionTypes";

const loginAction = loginData => dispatch => {
  return fetch('https://douglas-thestore-db.herokuapp.com/api/v2/auth/login',
    {
      method: "POST",
      body: JSON.stringify(
        loginData
      ),
      headers: {
        "Content-Type": "application/json"
      },
    }
  )
    .then(response => response.json())
    .then(data => {
      if (data.message == "Invalid username or password") {
        dispatch({
          type: ActionTypes.LOGIN_FAILED,
          payload: data.message
        });
      } else {
        dispatch({
          type: ActionTypes.LOGIN_SUCCESS,
          payload: data
        });
        localStorage.setItem('token', data.token)
        localStorage.setItem('User_logged_in', data.User_logged_in)
        window.location.reload()
      }
    })
    .catch(err => err);
};

export default loginAction;
