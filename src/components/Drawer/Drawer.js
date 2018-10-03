import React from "react";
import styled from "styled-components";
import Modal from "../Modal";

const Root = styled.aside`
  width: 375px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${props => (props.open ? 0 : -500)}px;
  z-index: 9999;
  background: #fff;
  box-shadow: -3px 0 55px rgba(0, 0, 0, 0.3);
  font-size: 12px;
  overflow: hidden;
  transition: right 0.2s ease-out, width 0.2s ease-out;
`;

const Drawer = ({ open, children, ...props }) => (
  <Modal open={open} keepMounted transparent {...props}>
    <Root open={open}>{children}</Root>
  </Modal>
);

Drawer.defaultProps = {
  open: false
};

export default Drawer;
