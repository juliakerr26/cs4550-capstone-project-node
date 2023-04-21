import bookClubsModel from './bookclubs-model.js';
export const findBookClubs = async () => await bookClubsModel.find();
export const findBookClubById = async id => await bookClubsModel.findById(id);
export const createBookClub = async club => bookClubsModel.create(club);
export const deleteBookClub = async id => bookClubsModel.deleteOne({ _id: id });
export const updateBookClub = async (id, club) => bookClubsModel.updateOne({ _id: id }, { $set: club });
