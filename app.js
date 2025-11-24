const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/hello", (req, res) => {
  res.json(["James", "Mary", "Robert", "Patricia", "John"]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
