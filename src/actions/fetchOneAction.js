import ActionTypes from "../actions/ActionTypes";

const token = localStorage.getItem("token");

const fetchOneAction = () => dispatch => {
  return fetch("https://douglas-thestore-db.herokuapp.com/api/v2/products/"+productid, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.message == "No product with that id") {
        dispatch({
          type: ActionTypes.FETCH_ONE_FAILED,
          payload: data.message
        });
      } else {
        dispatch({
          type: ActionTypes.FETCH_ONE_SUCCESS,
          payload: data.product
        });
      }
    })
    .catch(err => err);
};

export default fetchOneAction;
