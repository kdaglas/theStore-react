import ActionTypes from "../actions/ActionTypes";

const initialState = {
  product: [],
  error: ""
};

const fetchOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ONE_SUCCESS:
      return {
        ...state,
        product: action.payload,
      };
    case ActionTypes.FETCH_ONE_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default fetchOneReducer;
