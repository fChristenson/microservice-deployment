const express = require("express");
const app = express();

app.get("/api/v1/books", (req, res) => {
  res.end("booksv2");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Running server on port:", port);
  console.log("--------------------------");
});
