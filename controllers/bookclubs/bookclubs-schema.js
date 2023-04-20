import mongoose from 'mongoose';
const schema = mongoose.Schema({
  admin: String,
  bookList: [],
  name: String,
  members: [],
}, {collection: 'bookclubs'});
export default schema;