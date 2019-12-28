const express = require("express");
const app = express();

app.get("/api/v1/users", (req, res) => {
  res.end("users");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Running server on port:", port);
  console.log("--------------------------");
});
