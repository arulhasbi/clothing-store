import React from "react";
import styled from "styled-components";

export const Item = (props) => {
  return (
    <ItemWrapper className="basis-1/4 min-w-[250px] grow">
      <ItemMaxWidth>
        <div>
          <figure className="border block w-full">
            <img src={process.env.PUBLIC_URL + "/assets/flyknit.jpg"} alt="" />
          </figure>
          <p className="font-sans text-base antialiased mt-2">
            The quick brown fox
          </p>
          <p className="font-sans text-md font-bold antialiased">$17.99 USD</p>
          <button
            type="button"
            className="antialiased font-bold text-sm py-1 mt-5 border-2 border-slate-900 w-[110px] rounded-md shadow-sm bg-stone-100"
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
