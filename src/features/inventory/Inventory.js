import React, { useEffect } from "react";
import styled from "styled-components";
import { Item } from "../../components/Items/item";
import { loadItemsAsync } from "./inventorySlice";

export const Inventory = (props) => {
  const { state, dispatch } = props;

  // load inventory
  useEffect(() => {
    dispatch(loadItemsAsync());
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <InventoryWrapper>
      <InventoryMaxWidth className="flex flex-row flex-wrap gap-5 gap-y-12">
        {state.inventory.length !== 0 &&
          state.inventory.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              price={item.price}
              url={item.url}
            />
          ))}
      </InventoryMaxWidth>
    </InventoryWrapper>
  );
};

const InventoryWrapper = styled.div``;
const InventoryMaxWidth = styled.div``;
