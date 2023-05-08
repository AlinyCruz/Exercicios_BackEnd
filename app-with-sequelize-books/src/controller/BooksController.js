const BookService = require('../service/BooksService');

const error500Message = 'Algo deu errado';

const getAll = async (_req, res) => {
    const books = await BookService.getAll();
    return res.status(200).json(books);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const book = await BookService.getById(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
};

const createBook = async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const newBook = await BookService.createBook({ title, author, pageQuantity });
    return res.status(201).json(newBook);
};

const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const updatedBook = await BookService.updateBook(id, { title, author, pageQuantity });

    if (!updatedBook) return res.status(404).json({ message: 'Book not found!' });

    return res.status(201).json({ message: 'Book updated!' });
};

const deleteBook = async (req, res) => {
    const { id } = req.params;
    const removed = await BookService.deleteBook(id);
    
    if (!removed) return res.status(404).json({ message: 'Book not found!' });

    return res.status(200).json({ message: 'Book deleted!' });

};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};