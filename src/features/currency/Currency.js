import React, { useState } from "react";
import styled from "styled-components";

export const Currency = (props) => {
  const [currencies, setCurrencies] = useState(["USD", "EUR", "CAD"]);
  const [currency, setCurrency] = useState("");
  const handleClick = (param) => {
    setCurrency(param);
  };

  return (
    <CurrencyWrapper className="mb-5">
      <CurrencyMaxWidth>
        <h6 className="mb-2 font-bold text-base">Choose a currency</h6>
        <div className="w-fit flex gap-2">
          {currencies.length !== 0 &&
            currencies.map((cur, index) => (
              <button
                key={index}
                type="button"
                className={`antialiased text-sm py-1 border-2
                border-slate-900 w-[50px] rounded-md shadow-sm ${
                  currency === cur ? "bg-zinc-900 text-white font-bold" : null
                }`}
                onClick={() => handleClick(cur)}
              >
                {cur}
              </button>
            ))}
        </div>
      </CurrencyMaxWidth>
    </CurrencyWrapper>
  );
};

const CurrencyWrapper = styled.div``;
const CurrencyMaxWidth = styled.div``;
