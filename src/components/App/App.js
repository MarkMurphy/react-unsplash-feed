import React, { Component } from "react";
import "./App.css";
import Feed from "../Feed";
import Post from "../Post";
// import ImageList from "../ImageList";
// import Search from "../Search";
import api from "../../api";

class App extends Component {
  state = {
    images: [],
    loading: true
  };
  x;

  async componentDidMount() {
    const data = await api.get("photos", {
      page: 1,
      per_page: 9
    });

    console.log(data);

    this.setState({ images: data, loading: false });
  }

  renderPost(item) {
    return <Post item={item} key={item.id} />;
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="App">
        <Feed items={this.state.images} renderItem={this.renderPost} />
      </div>
    );
  }
}

export default App;
