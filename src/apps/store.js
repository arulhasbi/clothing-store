import { createStore, combineReducers, applyMiddleware } from "redux";
import { inventorySliceReducer } from "../features/inventory/inventorySlice";
import { currencySliceReducer } from "../features/currency/currencySlice";
import { cartSliceReducer } from "../features/cart/cartSlice";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  inventory: inventorySliceReducer,
  currency: currencySliceReducer,
  cart: cartSliceReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
