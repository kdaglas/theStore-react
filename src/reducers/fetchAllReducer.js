import ActionTypes from "../actions/ActionTypes";

const initialState = {
  products: [],
  error: ""
};

const fetchAllReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case ActionTypes.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default fetchAllReducer;
