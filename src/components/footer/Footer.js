import React from "react";
import styled from "styled-components";
import { Cart } from "../../features/cart/Cart";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export const Footer = (props) => {
  const { state, dispatch } = props;
  return (
    <FooterWrapper className="fixed top-[104px] right-0 w-[300px] self-start border-2 border-slate-900 shadow-xl shadow-sky-200 transition duration-150 ease-in-out">
      <p className="bg-white px-5 py-[16px] font-bold antialiased">Cart</p>
      <FooterMaxWidth className="ml-auto mr-auto flex max-w-4xl flex-col gap-4 bg-teal-100 px-5 py-5">
        {state.cart.length !== 0 &&
          state.cart.map((item) => (
            <Cart
              key={item.id}
              name={item.name}
              state={state}
              dispatch={dispatch}
            />
          ))}
      </FooterMaxWidth>
      <button
        type="button"
        className="flex w-full items-center bg-white px-5 py-[16px] underline-offset-4 hover:underline"
      >
        Checkout
        <ArrowRightIcon className="ml-2 w-[20px]" />
      </button>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div``;
const FooterMaxWidth = styled.div``;
