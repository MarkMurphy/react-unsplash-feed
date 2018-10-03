import React, { Component } from "react";
import "./App.css";
import AppHeader from "../AppHeader";
import Avatar from "../Avatar";
import Settings from "../Settings";
import Feed from "../Feed";
import Search from "../Search";
import api from "../../api";

class App extends Component {
  state = {
    error: false,
    loading: true,
    hasMore: true,
    images: [],
    query: "",
    page: 0,
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
    window.addEventListener("scroll", this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }

  handleScroll = event => {
    const {
      fetchData,
      state: { error, loading, hasMore }
    } = this;

    // Bails early if:
    // * there's an error
    // * it's already loading
    // * there's nothing left to load
    if (error || loading || !hasMore) return;

    const el = document.documentElement;
    // Checks that the page has scrolled to the bottom
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 500) {
      fetchData();
    }
  };

  fetchData = () => {
    const page = this.state.page + 1;

    this.setState({ loading: true, page }, async () => {
      const data = await api.get("photos", {
        page,
        per_page: this.state.limit,
        order_by: this.state.sort
      });

      console.log(data);

      this.setState({
        images: [...this.state.images, ...data],
        loading: false,
        hasMore: !!data.length
      });
    });
  };

  handleSearch = query => {
    if (query) {
      this.search(query);
    }
  };

  search = query => {
    this.setState(
      {
        error: false,
        loading: true,
        images: [],
        page: 1,
        query
      },
      async () => {
        const data = await api.get("search/photos", {
          query,
          page: this.state.page,
          per_page: this.state.limit
        });

        console.log("search result", data);

        this.setState({
          images: data.results,
          hasMore: data.total_pages > this.state.page,
          loading: false
        });
      }
    );
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
        <AppHeader>
          <Search placeholder="Search photos" onSearch={this.handleSearch} />
          <Settings
            activator={
              <Avatar src="https://randomuser.me/api/portraits/men/17.jpg" />
            }
          />
        </AppHeader>
        <Feed
          items={this.state.images}
          error={this.state.error}
          loading={this.state.loading || this.waiting}
          hasMore={this.state.hasMore}
        />
      </div>
    );
  }
}

export default App;
