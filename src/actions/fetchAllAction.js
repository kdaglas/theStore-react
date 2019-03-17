import ActionTypes from "../actions/ActionTypes";

const token = localStorage.getItem("token");

const fetchAllAction = () => dispatch => {
  return fetch("https://douglas-thestore-db.herokuapp.com/api/v2/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.message == "No products added yet") {
        dispatch({
          type: ActionTypes.FETCH_PRODUCTS_FAILED,
          payload: data.message
        });
      } else {
        dispatch({
          type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
          payload: data.All_products
        });
      }
    })
    .catch(err => err);
};

export default fetchAllAction;
