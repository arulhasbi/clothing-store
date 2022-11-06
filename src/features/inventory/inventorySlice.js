import { getInventory } from "../../api/inventory";

const loadItems = (items) => {
  return {
    type: "inventory/loadItems",
    payload: items,
  };
};

export const loadItemsAsync = () => {
  return async (dispatch) => {
    const response = await getInventory();
    dispatch(loadItems(response));
  };
};

const initialState = [];
export const inventorySliceReducer = (inventory = initialState, action) => {
  switch (action.type) {
    case "inventory/loadItems":
      return [...action.payload];
    default:
      return inventory;
  }
};
