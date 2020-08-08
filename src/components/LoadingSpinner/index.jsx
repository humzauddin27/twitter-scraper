import React, { Component } from "react";
import "./index.css";

class LoadingSpinner extends Component {
  render() {
    const iconImage = require(`../../assets/images/twitter_icon.png`);
    return (
      <img
        className="spinning-pokeball"
        src={String(iconImage)}
        alt="Loading..."
      />
    );
  }
}

export default LoadingSpinner;
