import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.6);
`;

const ModalContent = props => {
  return ReactDOM.createPortal(<Container {...props} />, document.body);
};

class Modal extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isOpen && (
          <ModalContent>{this.props.children}</ModalContent>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
