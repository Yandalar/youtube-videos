"use strict";
const { response } = require("express");
const express = require("express");
const youtube = require("./API/youtube");
const cors = require("cors");

// Create the express app
const app = express();

// Routes and middleware
// app.use(/* ... */)
// app.get(/* ... */)

// Start server
app.use(cors());

app.get("", (req, res) => {
  youtube
    .get("/search", {
      params: {
        q: req.query.q,
      },
    })
    .then((response) => res.send(response.data));
});

// Error handlers
app.use(function fourOhFourHandler(req, res) {
  res.status(404).send();
});
app.use(function fiveHundredHandler(err, req, res, next) {
  console.error(err);
  res.status(500).send();
});

app.listen(1234, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log("Started at http://localhost:1234");
});
