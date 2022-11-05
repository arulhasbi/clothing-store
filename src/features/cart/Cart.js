import React from "react";
import styled from "styled-components";

export const Cart = (props) => {
  return (
    <CartWrapper>
      <CartMaxWidth>
        <div className="flex justify-between">
          <p className="text-base antialiased">Fly Knit Shoes</p>
          <select
            name="quantity"
            id="quantity"
            className="w-[50px]
                border-2 border-slate-900"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </CartMaxWidth>
    </CartWrapper>
  );
};

const CartWrapper = styled.div``;
const CartMaxWidth = styled.div``;
