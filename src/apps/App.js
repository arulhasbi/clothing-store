import "./App.css";
import styled from "styled-components";
import { Item } from "../components/Items/item.js";

function App(props) {
  return (
    <AppWrapper className="px-5 pt-10">
      <AppMaxWidth className="max-w-4xl ml-auto mr-auto flex flex-row flex-wrap gap-5">
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
