import mongoose from 'mongoose';
const schema = mongoose.Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  firstName: String,
  lastName: String,
  isAdmin: Boolean,
  bookList: [],
}, {collection: 'tuits'});
export default schema;