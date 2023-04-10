import usersModel from './users-model.js';
export const findUser = (id) => usersModel.findById(id);
export const findUserByCredentials = (username, password) => usersModel.findOne({username: username, password: password});
export const createUser = (user) => usersModel.create(user);
export const deleteTuit = (uid) => usersModel.deleteOne({_id: uid});
export const updateTuit = (uid, user) => usersModel.updateOne({_id: uid}, {$set: user})
