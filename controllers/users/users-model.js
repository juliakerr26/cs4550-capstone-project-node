import mongoose from 'mongoose';
import usersSchema from './users-schema.js'
const usersModel = mongoose
.model('UserModel', usersSchema, 'users');
export default usersModel;