import mongoose from 'mongoose';
const schema = mongoose.Schema({
  admin: String,
  bookList: [],
  users: [],
}, {collection: 'tuits'});
export default schema;