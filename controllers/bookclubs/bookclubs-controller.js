import * as bookClubsDao from './bookclubs-dao.js';

const createBookClub = async (req, res) => {
  const newBookClub = req.body;
  newBookClub.bookList = [];
  const insertedBookClub = await bookClubsDao.createBookclub(newBookClub);
  res.json(insertedBookClub);
};

const findBookClubs = async (req, res) => {
  const bookClub = await bookClubsDao.findBookClubs();
  res.json(bookClub);
};

const findBookClubById = async (req, res) => {
  const bookClub = await bookClubsDao.findBookClubById(req.params.uid);
  res.json(bookClub);
}

const updateBookClub = async (req, res) => {
  const bookClubIdToUpdate = req.params.bid;
  const updates = req.body;
  const status = await bookClubsDao.updateBookClub(bookClubIdToUpdate, updates);
  res.json(status);
};

const deleteBookClub = async (req, res) => {
  const bookClubIdToDelete = req.params.bid;
  const status = await bookClubsDao.deleteBookClub(bookClubIdToDelete);
  res.json(status);
};

export default app => {
  app.post('/api/bookclubs', createBookClub);
  app.get('/api/bookclubs', findBookClubs);
  app.get('/api/bookclubs/:id', findBookClubById)
  app.put('/api/bookclubs/:id', updateBookClub);
  app.delete('/api/bookclubs/:id', deleteBookClub);
};
