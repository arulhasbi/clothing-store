import { createStore, combineReducers, applyMiddleware } from "redux";
import { inventorySliceReducer } from "../features/inventory/inventorySlice";
import { currencySliceReducer } from "../features/currency/currencySlice";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  inventory: inventorySliceReducer,
  currency: currencySliceReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
