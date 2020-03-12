import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Drawer from '../Drawer';
import User from './User';
import ThemeToggle from './ThemeToggle';

const SettingsDrawer = styled(Drawer)`
  color: #000;
`;

const onClick = (activator, callback) => (event) => {
  if (activator.props.onClick) {
    activator.props.onClick(event);
  }

  if (event.defaultPrevented) {
    return;
  }

  callback();
};

class Settings extends Component {
  state = {
    open: false,
  };

  open = () => {
    this.setState({ open: true });
  };

  close = () => {
    this.setState({ open: false });
  };

  render() {
    const { activator, ...props } = this.props;

    const anchor = React.cloneElement(activator, {
      onClick: onClick(activator, this.open),
    });

    return (
      <Fragment>
        {anchor}
        <SettingsDrawer
          {...props}
          open={this.state.open}
          onRequestClose={this.close}
        >
          <User />
          <ThemeToggle />
        </SettingsDrawer>
      </Fragment>
    );
  }
}

export default Settings;
