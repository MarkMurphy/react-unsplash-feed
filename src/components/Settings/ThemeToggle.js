import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;

  input {
    margin-left: 8px;
  }

  label + label {
    margin-left: 16px;
  }
`;

class ThemeToggle extends React.Component {
  state = {
    theme: "light"
  };

  toggleTheme = () => {
    this.setState(
      ({ theme }) => ({
        theme: theme === "light" ? "dark" : "light"
      }),
      this.changeTheme
    );
  };

  changeTheme = () => {
    const { classList } = document.body;
    if (this.state.theme === "light") {
      classList.add("light");
      classList.remove("dark");
    } else {
      classList.add("dark");
      classList.remove("light");
    }
  };

  render() {
    const { theme } = this.state;

    return (
      <Root>
        Theme
        <div>
          <label>
            Light
            <input
              type="radio"
              onChange={this.toggleTheme}
              title="Light theme"
              name="theme"
              value="light"
              checked={theme === "light"}
            />
          </label>
          <label>
            Dark
            <input
              type="radio"
              onChange={this.toggleTheme}
              title="Dark theme"
              name="theme"
              value="dark"
              checked={theme === "dark"}
            />
          </label>
        </div>
      </Root>
    );
  }
}

export default ThemeToggle;
