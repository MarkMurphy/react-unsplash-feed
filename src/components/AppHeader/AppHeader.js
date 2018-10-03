import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 57px;
  padding: 16px;
  position: fixed;
  top: 0;
  bottom: 0;
  background: inherit;
  z-index: 1000;
  border-bottom: 1px solid #ebebeb;
  transition: background-color 0.3s;

  .dark & {
    border-color: #100f13;
  }
`;

const AppHeader = ({ children }) => <Root>{children}</Root>;

export default AppHeader;
