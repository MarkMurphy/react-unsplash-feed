import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: ${props => (props.open ? "auto" : "none")}
  z-index: 9999;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, ${props => (props.transparent ? 0 : 0.6)});
  z-index: -1;
`;

class Modal extends Component {
  static propTypes = {
    open: PropTypes.bool,
    keepMounted: PropTypes.bool,
    transparent: PropTypes.bool,
    onRequestClose: PropTypes.func
  };

  render() {
    const { children, transparent, ...props } = this.props;

    return (
      !!(props.open || props.keepMounted) &&
      ReactDOM.createPortal(
        <Root {...props}>
          <Backdrop
            transparent={transparent}
            onClick={this.props.onRequestClose}
          />
          {children}
        </Root>,
        document.body
      )
    );
  }
}

export default Modal;
