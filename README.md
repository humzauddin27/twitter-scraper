This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

tweet sweep is a simple web app where you type in a keyword that you're looking for tweets about.
the web-app will give you upto the 1000 most recent tweets with that keyword featured, and sort them by interaction (highest number of rts + favs at the top)

BEFORE YOU GO IN
----------------
you may see multiple tweets that have the same text that appear in a row. this is because multiple users retweeted the same tweet.
twitters api treates these as separate "tweet" objects, so i intentionally left these in.

ways around this that i may choose to implement:
1) store tweets in a Set and check against id/text of the tweet so that there are no duplicates.
2) collapse the multiple tweets into one tweet, and just include something like "3 users" instead of 3 tweets

thanks for reading and that's it!
