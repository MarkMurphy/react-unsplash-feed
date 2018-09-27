import React, { Component } from "react";
import "./App.css";
import Feed from "../Feed";
import Search from "../Search";
import api from "../../api";

class App extends Component {
  state = {
    images: [],
    loading: true,
    hasMore: true,
    query: "",
    page: 1,
    limit: 9,
    sort: "latest"
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.loading && !prevState.loading) {
      this.wait();
    }
  }

  componentDidMount() {
    this.fetchData(this.state);
  }

  fetchData = async () => {
    const data = await api.get("photos", {
      page: this.state.page,
      per_page: this.state.limit,
      order_by: this.state.sort
    });

    console.log(data);

    this.setState({
      images: data,
      loading: false,
      hasMore: !!data.length
    });
  };

  handleSearch = query => {
    if (query) {
      this.search(query);
    }
  };

  search = async query => {
    this.setState({
      loading: true,
      page: 1,
      query
    });

    const data = await api.get("search/photos", {
      query,
      page: this.state.page,
      per_page: this.state.limit
    });

    console.log("search result", data);

    const hasMore = data.total_pages > this.state.page;

    this.setState({
      images: data.results,
      hasMore,
      loading: false
    });
  };

  wait = () => {
    this.waiting = true;
    setTimeout(() => {
      this.waiting = false;
      this.forceUpdate();
    }, 350);
  };

  render() {
    return (
      <div className="App">
        <Search placeholder="Search photos" onSearch={this.handleSearch} />
        <Feed
          items={this.state.images}
          loading={this.state.loading || this.waiting}
        />
      </div>
    );
  }
}

export default App;
