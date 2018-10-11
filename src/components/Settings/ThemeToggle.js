import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { changeTheme } from '../../state/theme/actions';

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

const Radio = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 50%;
  background-color: ${(props) =>
    props.value === 'light'
      ? 'var(--background-color-light)'
      : 'var(--background-color-dark)'};
`;

class ThemeToggle extends React.Component {
  changeTheme = (theme) => {
    console.log(changeTheme(theme));
    this.props.dispatch(changeTheme(theme));
  };

  render() {
    const { theme } = this.props;

    return (
      <Root>
        Theme
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label>
            <Radio
              onClick={this.changeTheme.bind(this, 'light')}
              title="Light theme"
              name="theme"
              value="light"
              checked={theme === 'light'}
            />
          </label>
          <label>
            <Radio
              onClick={this.changeTheme.bind(this, 'dark')}
              title="Dark theme"
              name="theme"
              value="dark"
              checked={theme === 'dark'}
            />
          </label>
        </div>
      </Root>
    );
  }
}

const mapState = (state) => ({ theme: state.theme });

export default connect(mapState)(ThemeToggle);
