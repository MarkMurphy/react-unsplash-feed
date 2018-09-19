import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./AppHeader";
import AppIntro from "./AppIntro";
import Feed from "./Feed";
import FeedItem from "./Feed/FeedItem";

const accessKey =
  "7e8948b261ea2a28cdafe10db9c7b3d07b8a1ff1feaf33b909618a6eceefa919";

class App extends Component {
  state = {
    images: [],
    loading: true
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

    this.setState({ images: data, loading: false });

    console.log(data);
  }

  renderPost(item) {
    return <FeedItem item={item} key={item.id} />;
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="App">
        <AppHeader image={logo} />
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>

        <Feed items={this.state.images} renderItem={this.renderPost} />
      </div>
    );
  }
}

export default App;
