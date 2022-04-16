import db from "../db/connection.js";
import Sunlight from "../models/sunlight.js";
import User from "../models/user.js";
import Book from "../models/book.js";
import sunlights from "./sunlights.json" assert { type: "json" };
import users from "./users.json" assert {type: "json" };
import books from "./books.json" assert {type: "json" };

const inserData = async () => {
  await Sunlight.insertMany(sunlights);
  await User.insertMany(users);
  await Book.insertMany(books);
  db.close();
}

inserData();