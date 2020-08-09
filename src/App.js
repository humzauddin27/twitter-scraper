import React, { Component } from "react";
import Search from "./components/Search";
import Display from "./components/Display";
import LoadingSpinner from "./components/LoadingSpinner";
import { API_URL } from "./consts.js";
import "./App.css";

class App extends Component {
  state = {
    tweets: [],
    loading: false,
    error: null
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
          error: null,
          tweets: response,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: err,
          loading: false,
          tweets: []
        });
      });
  };

  render() {
    const { tweets, loading, error } = this.state;
    const iconImage = require(`./assets/images/twitter_icon.png`);
    console.log(error);
    return (
      <div className="App">
        <header className="App-header">
          <img src={String(iconImage)} alt="icon" />
          <div>tweet sweep</div>
        </header>
        <Search handleOnClick={this.handleOnClick} />
        {loading ? <LoadingSpinner /> : <Display tweets={tweets} />}
        <p>
          {tweets.length && !loading && !error
            ? `Displaying ${tweets.length} tweets`
            : null}
          {error && !loading && tweets.length === 0
            ? `An error occured. Please try again or refresh the page`
            : null}
        </p>
      </div>
    );
  }
}

export default App;
