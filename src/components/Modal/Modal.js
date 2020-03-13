import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: ${(props) => (props.open ? 'auto' : 'none')};
  z-index: 9999;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, ${(props) => (props.transparent ? 0 : 0.6)});
  z-index: -1;
`;

class Modal extends Component {
  static propTypes = {
    open: PropTypes.bool,
    keepMounted: PropTypes.bool,
    transparent: PropTypes.bool,
    onRequestClose: PropTypes.func,
  };

  render() {
    const {
      children,
      keepMounted,
      onRequestClose,
      open,
      transparent,
      ...props
    } = this.props;

    if (!(open || keepMounted)) return false;

    return ReactDOM.createPortal(
      <Root {...props} open={open}>
        <Backdrop transparent={transparent} onClick={onRequestClose} />
        {children}
      </Root>,
      document.body,
    );
  }
}

export default Modal;
