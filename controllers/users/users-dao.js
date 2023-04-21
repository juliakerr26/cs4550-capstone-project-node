import usersModel from './users-model.js';
export const findAllUsers = async () => await usersModel.find();
export const findUserById = async id => await usersModel.findById(id);
export const findUserByUsername = async username => await usersModel.findOne({ username: username });
export const searchUserByUsername = async username =>
  await usersModel.find({ username: { $regex: new RegExp(username, 'i') } });
export const findUserByCredentials = async (username, password) =>
  await usersModel.findOne({ username: username, password: password });
export const createUser = async user => await usersModel.create(user);
export const updateTuit = async (uid, user) => await usersModel.updateOne({ _id: uid }, { $set: user });
export const deleteTuit = async uid => await usersModel.deleteOne({ _id: uid });
