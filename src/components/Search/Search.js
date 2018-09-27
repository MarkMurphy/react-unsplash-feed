import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Modal from "../Modal";

const Form = styled.form`
  display: flex;
  margin: 16px;
  align-items: center;
  flex-flow: column;
  margin-top: 20vh;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 14px;
  width: 480px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.25);
  }
`;

const Instructions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  color: #999;

  kbd {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
    margin: 8px;
    padding: 1px 8px;
    border: 1px solid currentColor;
    border-radius: 4px;
  }
`;

class Search extends Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleDocumentKeyDown, true);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleDocumentKeyDown, true);
  }

  handleDocumentKeyDown = event => {
    if (event.metaKey && event.key === "j") {
      this.setState({ isOpen: !this.state.isOpen });
    } else if (event.key === "Escape" && this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  };

  focus() {
    if (this.state.isOpen) {
      this.input.focus();
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSearch(this.input.value);

    this.setState({
      isOpen: false
    });
  };

  inputRef = node => {
    this.input = node;
    this.focus();
  };

  render() {
    const form = (
      <Form onSubmit={this.handleSubmit}>
        <Instructions>
          To close press <kbd>ESC</kbd>
        </Instructions>
        <Input innerRef={this.inputRef} placeholder={this.props.placeholder} />
      </Form>
    );

    return (
      <Fragment>
        <Instructions>
          To search press <kbd>⌘</kbd> + <kbd>J</kbd>
        </Instructions>
        <Modal isOpen={this.state.isOpen}>{form}</Modal>
      </Fragment>
    );
  }
}

export default Search;
