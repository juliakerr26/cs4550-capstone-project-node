import mongoose from 'mongoose';
const schema = mongoose.Schema({
  admin: String,
  bookList: [],
  members: [],
}, {collection: 'bookclubs'});
export default schema;