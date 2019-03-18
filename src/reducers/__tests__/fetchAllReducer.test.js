import fetchAllReducer from "../fetchAllReducer";
import ActionTypes from "../../actions/ActionTypes";

const initialState = {
  products: [],
  error: ""
};

describe("The fetch all products Reducer", () => {
  it("should return new state from fetching products", () => {
    const action = {
      type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
      payload: {
        products: [{ product_name: "carrots" }],
      }
    };
    const expectedState =  { products: { products: [ { product_name: "carrots"} ] }, error: '' }
    expect(fetchAllReducer(initialState, action)).toEqual(expectedState);
  });

  it("should return no products when it fails", () => {
    const action = {
      type: ActionTypes.FETCH_PRODUCTS_FAILED,
      payload: "message"
    };
    const expectedState =  { products: [], error: 'message' }
    expect(fetchAllReducer(initialState, action)).toEqual(expectedState);
  });
});
