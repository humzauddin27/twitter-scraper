export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://humzas-twitter-scraper-backend.herokuapp.com"
    : "http://localhost:8080";
