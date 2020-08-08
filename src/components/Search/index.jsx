import React, { Component } from "react";
import "./index.css";

class GuessInput extends Component {
  state = {
    inputValue: ""
  };

  updateSearchValue = event => {
    const newInputValue = event.target.value;
    this.setState({ inputValue: newInputValue });
  };

  onSearch = () => {
    this.props.handleOnClick(this.state.inputValue);
  };

  render() {
    return (
      <div className="input-container">
        <input
          className="input"
          value={this.state.inputValue}
          onChange={this.updateSearchValue}
          onKeyDown={event => {
            if (event.key === "Enter") {
              this.onSearch();
            }
          }}
          placeholder={"Search for a keyword..."}
        />
        <div className="search-button" onClick={this.onSearch}>
          Search
        </div>
      </div>
    );
  }
}

export default GuessInput;
