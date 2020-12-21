import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 1000px;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function TodoTemplate({ children }) {
  return <Container>{children}</Container>;
}

export default TodoTemplate;
