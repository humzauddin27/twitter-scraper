import React, { Component } from "react";
import Search from "./components/Search";
import Display from "./components/Display";
import { API_URL } from "./consts.js";
import "./App.css";

class App extends Component {
  state = {
    tweets: []
  };

  handleOnClick = searchValue => {
    const formData = new FormData();
    formData.append(0, searchValue);

    fetch(`${API_URL}/search`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(response => {
        this.setState({
          tweets: response
        });
      });
  };

  render() {
    const { tweets } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <div>tweet sweep</div>
        </header>
        <Search handleOnClick={this.handleOnClick} />
        <Display tweets={tweets} />
      </div>
    );
  }
}

export default App;
