import React, { Component } from "react";
import Search from "./components/Search";
import Display from "./components/Display";
import LoadingSpinner from "./components/LoadingSpinner";
import { API_URL } from "./consts.js";
import "./App.css";

class App extends Component {
  state = {
    tweets: [],
    loading: false
  };

  handleOnClick = searchValue => {
    const formData = new FormData();
    formData.append(0, searchValue);
    this.setState({
      loading: true
    });

    fetch(`${API_URL}/search`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(response => {
        this.setState({
          tweets: response,
          loading: false
        });
      });
  };

  render() {
    const { tweets, loading } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <div>tweet sweep</div>
        </header>
        <Search handleOnClick={this.handleOnClick} />
        {loading ? <LoadingSpinner /> : <Display tweets={tweets} />}
        <p>
          {tweets.length && !loading
            ? `Displaying ${tweets.length} tweets`
            : null}
        </p>
      </div>
    );
  }
}

export default App;
