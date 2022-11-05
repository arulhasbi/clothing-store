import { createStore, combineReducers, applyMiddleware } from "redux";
import { inventorySliceReducer } from "../features/inventory/inventorySlice";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  inventory: inventorySliceReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
