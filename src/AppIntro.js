import React from "react";

function AppIntro({ children, ...props }) {
  return (
    <div className="App-Intro" {...props}>
      {children}
    </div>
  );
}

export default AppIntro;
