import mongoose from "mongoose";
const Schema = mongoose.Schema;
let Book = new Schema({
  name: { type: String },
  author: { type: String },

});

export default mongoose.model("book", Book);