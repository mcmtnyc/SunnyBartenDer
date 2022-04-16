import Book from "../models/book.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
};

export const getBook = async (req, res) => {
  try {
    const { id } = req.params
    const book = await User.findById(id);
    if (book) {
      return res.json(book)
    }
    res.status(400).json({ message: "User not found!" })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
};

export const createBook = async (req, res) => {
  try {

    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book)

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
};

export const updateBook = async (req, res) => {

  const { id } = req.params;
  const book = await Book.findByIdAndUpdate(id, req.body);

  res.status(200).json(book)


};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("book deleted!")
    }
    throw new Error("book not found")
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }

};