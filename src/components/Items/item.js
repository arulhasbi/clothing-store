import React from "react";
import styled from "styled-components";

export const Item = (props) => {
  return (
    <ItemWrapper className="min-w-[250px] grow basis-1/4">
      <ItemMaxWidth>
        <div>
          <figure className="block w-full border">
            <img src={process.env.PUBLIC_URL + props.url} alt="" />
          </figure>
          <p className="mt-2 font-sans text-base antialiased">{props.name}</p>
          <p className="text-md font-sans font-bold antialiased">
            ${Math.floor(props.price)} USD
          </p>
          <button
            type="button"
            className="mt-5 w-[110px] rounded-md border-2 border-slate-900 bg-stone-100 py-1 text-sm antialiased shadow-sm"
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
