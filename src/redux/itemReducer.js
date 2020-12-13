export const PRODUCT_REDUCER = "PRODUCT_REDUCER";
export const SET_FILTER_PRODUCT = "SET_FILTER_PRODUCT";
let initialState = {};

const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_REDUCER:
      return action.payload;
    case SET_FILTER_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default ItemReducer;
