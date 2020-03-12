import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import Drawer from '../../components/Drawer';
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

function Settings({ activator, ...props }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const anchor = React.cloneElement(activator, {
    onClick: onClick(activator, handleOpen),
  });

  return (
    <Fragment>
      {anchor}
      <SettingsDrawer {...props} open={open} onRequestClose={handleClose}>
        <User />
        <ThemeToggle />
      </SettingsDrawer>
    </Fragment>
  );
}

export default Settings;
