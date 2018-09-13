import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./AppHeader";
import AppIntro from "./AppIntro";
import ImageList from "./ImageList";

const accessKey =
  "7e8948b261ea2a28cdafe10db9c7b3d07b8a1ff1feaf33b909618a6eceefa919";

class App extends Component {
  state = {
    images: []
  };

  async componentDidMount() {
    const response = await fetch(
      "https://api.unsplash.com/photos?page=1&per_page=9",
      {
        headers: {
          Authorization: `Client-ID ${accessKey}`
        }
      }
    );

    const data = await response.json();

    this.setState({ images: data });
  }

  render() {
    return (
      <div className="App">
        <AppHeader image={logo} />
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
