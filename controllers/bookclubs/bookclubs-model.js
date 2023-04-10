import mongoose from 'mongoose';
import bookClubsSchema from './users-schema.js'
const bookClubsModel = mongoose
.model('BookclubModel', bookClubsSchema, 'bookclubs');
export default bookClubsModel;