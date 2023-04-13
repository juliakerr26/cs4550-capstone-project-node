import usersModel from './users-model.js';
export const findAllUsers = async () => await usersModel.findAllUsers();
export const findUserById = async id => await usersModel.findUserById(id);
export const findUserByUsername = async username => await usersModel.findOne({ username: username });
export const findUserByCredentials = async (username, password) =>
  await usersModel.findOne({ username: username, password: password });
export const createUser = async user => await usersModel.create(user);
export const updateTuit = async (uid, user) => await usersModel.updateOne({ _id: uid }, { $set: user });
export const deleteTuit = async uid => await usersModel.deleteOne({ _id: uid });
