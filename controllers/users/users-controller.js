import * as usersDao from "./users-dao.js";
import {findUserByCredentials} from "./users-dao.js";

const createUser = async (req, res) => {
  const newUser = req.body;
  newUser.bookList = [];
  const insertedUser = await usersDao
  .createUser(newUser);
  res.json(insertedUser);
}

const findAllUsers = async (req, res) => {
  const users = await usersDao.findUser();
  res.json(users);
}

const findUserById = async (req, res) => {
  const user = await usersDao.findUser(req.params.uid);
  res.json(user);
}

const findUserByUsername = async (req, res) => {
  const user = await usersDao.findUserByUsername(req.params.username);
  res.json(user);
}

const findUserByCredentials = async (req, res) => {
  const user = await usersDao.findUserByCredentials(req.params.username, req.params.password);
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

const login = async (req, res) => {
  const user = await usersDao.findUserByCredentials(req.body);
  if (user) {
    req.session["currentUser"] = user;
    res.json(user);
  } else {
    res.sendStatus(401);
  }
};

const logout = async (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
}

const profile = async (req, res) => {
  const currentUser = req.session["currentUser"];
  if (!currentUser) {
    res.sendStatus(404);
    return;
  }
  res.send(currentUser);
}

const register = async (req, res) => {
  const user = req.body;
  const existingUser = await usersDao.findUserByUsername(user.username);
  if (existingUser) {
    res.sendStatus(409);
    return;
  }
  const newUser = await usersDao.createUser(user);
  req.session.currentUser = newUser;
  res.json(newUser);
}

export default (app) => {
  app.post("/api/users/login", login);
  app.post("/api/users/logout", logout);
  app.get("/api/users/profile", profile);
  app.post("/api/users/register", register);
  
  app.post('/api/users', createUser);
  app.get('/api/users', findAllUsers);
  app.get('/api/users/:uid', findUserById);
  app.get('/api/users/username/:username', findUserByUsername);
  app.get('/api/users/:username/:password', findUserByCredentials)
  app.put('/api/users/:uid', updateUser);
  app.delete('/api/users/:uid', deleteUser);
}

