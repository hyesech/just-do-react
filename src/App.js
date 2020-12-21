import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import TodoTemplate from "./Components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #eeeeee;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;

    display: flex;
    justify-content:center;
    align-items:center;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>hi</TodoTemplate>
    </>
  );
}

export default App;
