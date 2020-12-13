import { ProductsAPI } from "../api/api";

const SET_PRODUCT_PAGE = "SET_PRODUCT_PAGE";

let initialState = {
  productPage: [],
};

const ProductPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_PAGE:
      return {
        ...state,
        productPage: action.productPage,
      };
    default:
      return state;
  }
};

export const setProductPage = (productPage) => {
  return {
    type: SET_PRODUCT_PAGE,
    productPage,
  };
};

export const getProductPage = (productId) => {
  return (dispatch) => {
    ProductsAPI.getProductPage(productId).then((data) => {
      dispatch(setProductPage(data));
    });
  };
};

export default ProductPageReducer;
