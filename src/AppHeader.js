import React from "react";

function AppHeader(props) {
  return (
    <header className="App-header">
      <img src={props.image} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
  );
}

export default AppHeader;
