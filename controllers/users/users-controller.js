import * as usersDao from "./users-dao.js";
import {findUserByCredentials} from "./users-dao.js";

const createUser = async (req, res) => {
  const newUser = req.body;
  newUser.bookList = [];
  const insertedUser = await usersDao
  .createUser(newUser);
  res.json(insertedUser);
}

const findUser = async (req, res) => {
  const user = await usersDao.findUser(req.uid);
  res.json(user);
}

const findUserByCredentials = async (req, res) => {
  const user = await usersDao.findUserByCredentials(req.username, req.password);
  res.json(user);
}

const updateUser = async (req, res) => {
  const userIdToUpdate = req.params.uid;
  const updates = req.body;
  const status = await usersDao
  .updateTuit(userIdToUpdate,
      updates);
  res.json(status);
}

const deleteUser = async (req, res) => {
  const userIdToDelete = req.params.uid;
  const status = await usersDao
  .deleteTuit(userIdToDelete);
  res.json(status);
}

export default (app) => {
  app.post('/api/users', createUser);
  app.get('/api/users/:uid', findUser);
  app.get('/api/users/:username/:password', findUserByCredentials)
  app.put('/api/users/:uid', updateUser);
  app.delete('/api/users/:uid', deleteUser);
}

