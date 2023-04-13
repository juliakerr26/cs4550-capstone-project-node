import mongoose from 'mongoose';
const schema = mongoose.Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  firstName: String,
  lastName: String,
  email: { type: String },
  createdOn: { type: Date, default: Date.now },
  isAdmin: { type: Boolean, default: false },
  bookList: [],
}, {collection: 'users'});
export default schema;