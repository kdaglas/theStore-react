import ActionTypes from '../actions/ActionTypes';

const initialState = {};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TEST_ACTION:
      return state;
    default:
      return state;
  }
};

export default testReducer;