import React from "react";
import styled from "styled-components";
import { Cart } from "../../features/cart/Cart";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export const Footer = (props) => {
  return (
    <FooterWrapper className="fixed top-[104px] right-0 w-[300px] self-start border-2 border-slate-900 pb-[16px] shadow-xl shadow-sky-200 transition duration-150 ease-in-out">
      <p className="px-5 py-[16px] font-bold antialiased">Cart</p>
      <FooterMaxWidth className="ml-auto mr-auto flex max-w-4xl flex-col gap-4 bg-teal-100 px-5 py-5">
        <Cart />
        <Cart />
      </FooterMaxWidth>
      <button
        type="button"
        className="mt-[16px] flex items-center px-5 underline-offset-4 hover:underline"
      >
        Checkout
        <ArrowRightIcon className="ml-2 w-[20px]" />
      </button>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div``;
const FooterMaxWidth = styled.div``;
