import { getCurrency } from "../../api/inventory";

const loadCurrency = (currency) => {
  return {
    type: "currency/loadCurrency",
    payload: currency,
  };
};

export const filter = (base) => {
  return {
    type: "currency/filter",
    payload: base,
  };
};

export const loadCurrencyAsync = () => {
  return async (dispatch) => {
    const response = await getCurrency();
    dispatch(loadCurrency(response));
  };
};

const initialState = {
  bases: [],
  filter: "USD",
};
export const currencySliceReducer = (currency = initialState, action) => {
  switch (action.type) {
    case "currency/loadCurrency":
      return {
        ...currency,
        bases: [...action.payload],
      };
    case "currency/filter":
      return {
        ...currency,
        filter: action.payload,
      };
    default:
      return currency;
  }
};
