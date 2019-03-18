import authReducer from "../authReducer";
import ActionTypes from "../../actions/ActionTypes";

const initialState = {
  message: "",
  token: "",
  isSuccessful: false,
  error: ""
};

describe("The login Reducer", () => {
  it("should return new state from successful login", () => {
    const action = {
      type: ActionTypes.LOGIN_SUCCESS,
      payload: {
        token: "myGodisawesome77",
        isSuccessful: true,
        error: ""
      }
    };
    const expectedState = {
      token: "myGodisawesome77",
      isSuccessful: true,
      error: ""
    };
    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it("should return initial state from unsuccessful login", () => {
    const action = {
      type: ActionTypes.LOGIN_FAILED,
      payload: {
        token: "",
        isSuccessful: false
      }
    };
    const expectedState =
    { message: '',
    token: '',
    isSuccessful: false,
    error: { token: '', isSuccessful: false } }
    
    expect(authReducer(initialState, action)).toEqual(expectedState );
  });
});
