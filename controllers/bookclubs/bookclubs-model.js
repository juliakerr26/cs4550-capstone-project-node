import mongoose from 'mongoose';
import bookClubsSchema from './bookclubs-schema.js'
const bookClubsModel = mongoose.model('BookclubModel', bookClubsSchema, 'bookclubs');
export default bookClubsModel;