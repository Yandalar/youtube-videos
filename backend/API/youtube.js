const axios = require("axios");

const KEY = process.env.REACT_APP_KEY;

module.exports = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
