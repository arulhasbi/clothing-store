import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { loadCurrencyAsync, filter } from "./currencySlice";

export const Currency = (props) => {
  const { state, dispatch } = props;
  const [selected, setSelected] = useState("USD");
  const handleClick = (param) => {
    setSelected(param);
  };

  useEffect(() => {
    dispatch(filter(selected));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    dispatch(loadCurrencyAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CurrencyWrapper className="mb-5">
      <CurrencyMaxWidth>
        <h6 className="mb-2 text-base font-bold">Choose a currency</h6>
        <div className="flex w-fit gap-2">
          {state.currency.bases.length !== 0 &&
            state.currency.bases.map((cur) => (
              <button
                key={cur.id}
                type="button"
                className={`w-[50px] rounded-md border-2 border-slate-900
              py-1 text-sm antialiased shadow-sm ${
                cur.abbrev === selected
                  ? "bg-zinc-900 font-bold text-white"
                  : null
              }`}
                onClick={() => handleClick(cur.abbrev)}
              >
                {cur.abbrev}
              </button>
            ))}
        </div>
      </CurrencyMaxWidth>
    </CurrencyWrapper>
  );
};

const CurrencyWrapper = styled.div``;
const CurrencyMaxWidth = styled.div``;
