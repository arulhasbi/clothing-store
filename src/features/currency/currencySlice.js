function increment() {
  return {
    type: "INCREMENT_COUNTER",
  };
}

export function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      // You can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 100);
  };
}

const initialState = 0;
export const currencyReducerSlice = (currency = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return currency + 1;
    default:
      return currency;
  }
};
