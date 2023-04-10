import * as bookClubsDao from "./bookclubs-dao.js";

const createBookclub = async (req, res) => {
  const newBookclub = req.body;
  newBookclub.bookList = [];
  const insertedBookclub = await bookClubsDao
  .createBookclub(newBookclub);
  res.json(insertedBookclub);
}

const findBookclub = async (req, res) => {
  const bookClub = await bookClubsDao.findBookclub()
  res.json(bookClub);
}

const updateBookclub = async (req, res) => {
  const bookclubIdToUpdate = req.params.bid;
  const updates = req.body;
  const status = await bookClubsDao
  .updateBookclub(bookclubIdToUpdate,
      updates);
  res.json(status);
}

const deleteBookclub = async (req, res) => {
  const bookclubIdToDelete = req.params.bid;
  const status = await bookClubsDao
  .deleteBookclub(bookclubIdToDelete);
  res.json(status);
}

export default (app) => {
  app.post('/api/bookclubs', createBookclub);
  app.get('/api/bookclubs/:bid', findBookclub);
  app.put('/api/bookclubs/:bid', updateBookclub);
  app.delete('/api/bookclubs/:bid', deleteBookclub);
}

