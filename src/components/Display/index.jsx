import React, { Component } from "react";
import "./index.css";

class Display extends Component {
  sortBy(field1, field2) {
    return function(a, b) {
      if (a[field1] + a[field2] > b[field1] + b[field2]) {
        return -1;
      } else if (a[field1] + a[field2] < b[field1] + b[field2]) {
        return 1;
      }
      return 0;
    };
  }

  sortTweets(tweets) {
    const arr = tweets
      .slice()
      .sort(this.sortBy("retweet_count", "favorite_count"));
    return arr;
  }

  renderTweets() {
    const { tweets } = this.props;
    const sortedTweets = this.sortTweets(tweets);
    return (
      <div className="tweets">
        {sortedTweets.map((tweet, i) => {
          return (
            <div className="tweet" key={i}>
              <a
                href={`https://twitter.com/${tweet.user.screen_name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="subsection">
                  <p className="name"> {tweet.user.name} </p>
                  <p className="user"> @{tweet.user.screen_name} </p>
                </div>
              </a>
              <a
                href={`https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text"> {tweet.text} </p>
              </a>
              <div className="subsection">
                <p> {tweet.retweet_count} </p>
                <p> {tweet.favorite_count} </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const { tweets } = this.props;

    return (
      <div className="display">
        {!tweets || tweets.length === 0 ? (
          <p>No tweets to display. </p>
        ) : (
          this.renderTweets()
        )}
      </div>
    );
  }
}

export default Display;
