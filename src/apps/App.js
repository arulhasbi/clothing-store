import "./App.css";
import styled from "styled-components";
import { Currency } from "../features/currency/Currency";
import { Footer } from "../components/footer/Footer";
import { Inventory } from "../features/inventory/Inventory";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("../mocks/browser");
  worker.start();
}

function App(props) {
  return (
    <AppWrapper className="ml-auto mr-auto max-w-4xl px-5 py-5">
      <Currency state={props.state} dispatch={props.dispatch} />
      <AppMaxWidth>
        <Inventory state={props.state} dispatch={props.dispatch}></Inventory>
      </AppMaxWidth>
      <Footer />
    </AppWrapper>
  );
}

const AppWrapper = styled.div``;
const AppMaxWidth = styled.div``;

export default App;
