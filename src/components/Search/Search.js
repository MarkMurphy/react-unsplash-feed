import React, { Component } from "react";
import styled from "styled-components";
import Modal from "../Modal";

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-flow: column;
  margin: 20vh auto;
`;

const Input = styled.input`
  padding: 14px;
  width: 480px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 4px;
`;

class Search extends Component {
  state = {
    open: false
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleDocumentKeyDown, true);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleDocumentKeyDown, true);
  }

  handleDocumentKeyDown = event => {
    if (event.metaKey && event.key === "j") {
      this.setState({ open: !this.state.open });
    }
  };

  handleInputChange = event => {
    console.log(event);
  };

  render() {
    return (
      <Modal isOpen={this.state.open}>
        <Container>
          <Input onChange={this.handleInputChange} />
        </Container>
      </Modal>
    );
  }
}

export default Search;
