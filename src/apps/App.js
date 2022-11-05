import "./App.css";
import styled from "styled-components";
import { Item } from "../components/Items/Item.js";
import { Currency } from "../features/currency/Currency";

function App(props) {
  return (
    <AppWrapper className="max-w-4xl ml-auto mr-auto px-5 pt-10">
      <Currency />
      <AppMaxWidth className="flex flex-row flex-wrap gap-5">
        <Item />
        <Item />
        <Item />
      </AppMaxWidth>
    </AppWrapper>
  );
}

const AppWrapper = styled.div``;
const AppMaxWidth = styled.div``;

export default App;
