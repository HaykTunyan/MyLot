import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import LiveAuctionReducer from "./LiveAuctionReducer";
import ProductPageReducer from "./ProductPageReducer";
import FilterGroupReducer from "./FilterGroupReducer";
import UserReducer from "./userReducer";
import LangReducer from "./langReducer";
import ItemReducer from "./itemReducer";

let reducers = combineReducers({
  liveAuction: LiveAuctionReducer,
  user: UserReducer,
  lang: LangReducer,
  filterGroup: FilterGroupReducer,
  itemReducer: ItemReducer,
  productPage: ProductPageReducer,
  form: formReducer,
});

let store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
