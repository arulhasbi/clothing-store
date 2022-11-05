import "./App.css";
import styled from "styled-components";
import { Item } from "../components/Items/item";
import { Currency } from "../features/currency/Currency";
import { Footer } from "../components/footer/Footer";

function App(props) {
  return (
    <AppWrapper className="ml-auto mr-auto max-w-4xl border px-5 py-5">
      <Currency />
      <AppMaxWidth className="flex flex-row flex-wrap gap-5">
        <Item />
        <Item />
        <Item />
      </AppMaxWidth>
      <Footer />
    </AppWrapper>
  );
}

const AppWrapper = styled.div``;
const AppMaxWidth = styled.div``;

export default App;
