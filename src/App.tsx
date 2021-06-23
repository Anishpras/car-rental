import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import "./App.css";
import { HomePage } from "./app/containers/HomePage";

const AppContainer = styled.div`
  ${tw`
      w-full
      h-full
      flex
      flex-col
`};
`;

function App() {
  return (
    <AppContainer>
      <HomePage />
      <h1></h1>
    </AppContainer>
  );
}

export default App;
