const express = require("express");

const app = express();

const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.listen(PORT || 8080, () => {
  console.log("app is listning");
});
