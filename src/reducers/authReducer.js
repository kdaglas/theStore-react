import ActionTypes from "../actions/ActionTypes";

const initialState = {
  message: "",
  token: "",
  isSuccessful: false,
  error: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isSuccessful: true,
        message: action.payload.themessage,
        token: action.payload.token
      };
    case ActionTypes.LOGIN_FAILED:
      return {
        ...state,
        isSuccessful: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
