import { ProductsAPI } from "../api/api";

const SET_LIVE_PRODUCTS = "SET_LIVE_PRODUCTS";
const TOGGLE_IS_FETTCHING = "TOGGLE_IS_FETTCHING";

let initialState = {
  liveproducts: [],
  isFetching: true,
};

const LiveAuctionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIVE_PRODUCTS:
      return {
        ...state,
        liveproducts: action.liveproducts,
      };
    case TOGGLE_IS_FETTCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const setLiveProducts = (liveproducts) => {
  return {
    type: SET_LIVE_PRODUCTS,
    liveproducts,
  };
};
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETTCHING,
    isFetching,
  };
};

export const getLiveProducts = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    ProductsAPI.getLiveProducts().then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setLiveProducts(data.data));
    });
  };
};

export default LiveAuctionReducer;
