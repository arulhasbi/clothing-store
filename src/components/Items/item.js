import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getConvert } from "../../api/inventory";
import { addToCart } from "../../features/cart/cartSlice";

const baseSymbol = {
  USD: "$",
  EUR: "€",
  CAD: "$",
};

export const Item = (props) => {
  const { state, dispatch } = props;
  const [priceTag, setPriceTag] = useState();

  const settingPriceTag = async (base) => {
    try {
      const response = await getConvert(props.price, base);
      setPriceTag(response.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const base = state.currency.filter;
    settingPriceTag(base);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.currency.filter]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <ItemWrapper className="min-w-[250px] grow basis-1/4">
      <ItemMaxWidth>
        <div>
          <figure className="block w-full border">
            <img src={process.env.PUBLIC_URL + props.url} alt="" />
          </figure>
          <p className="mt-2 font-sans text-base antialiased">{props.name}</p>
          <p className="text-md font-sans font-bold antialiased">
            {baseSymbol[props.state.currency.filter]}
            {priceTag ? Math.floor(priceTag) : "-"} {state.currency.filter}
          </p>
          <button
            type="button"
            className="mt-5 w-[110px] rounded-md border-2 border-slate-900 bg-stone-100 py-1 text-sm antialiased shadow-sm"
            onClick={() => handleAddToCart(props.fullItem)}
          >
            Add to cart
          </button>
        </div>
      </ItemMaxWidth>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div``;
const ItemMaxWidth = styled.div``;
