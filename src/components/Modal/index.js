import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContent = props => {
  return ReactDOM.createPortal(<Container {...props} />, document.body);
};

class Modal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool
  };

  render() {
    return (
      <Fragment>
        {this.props.isOpen && (
          <ModalContent>{this.props.children}</ModalContent>
        )}
      </Fragment>
    );
  }
}

export default Modal;
