const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const booksRoutes = require("./routes/booksRoutes");
app.use("/api/books", booksRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Books API! Use /api/books to access data.");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});