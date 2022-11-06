export const addToCart = (item) => {
  return {
    type: "cart/addToCart",
    payload: item,
  };
};

const initialState = [];
export const cartSliceReducer = (cart = initialState, action) => {
  switch (action.type) {
    case "cart/addToCart":
      return [...cart, action.payload];
    default:
      return cart;
  }
};
