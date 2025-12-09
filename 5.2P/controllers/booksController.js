const booksService = require("../services/booksService");

const getAllBooks = (req, res) => {
  res.json(booksService.getBooks());
};

const getBookById = (req, res) => {
  const book = booksService.getBook(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};

module.exports = {
  getAllBooks,
  getBookById
};