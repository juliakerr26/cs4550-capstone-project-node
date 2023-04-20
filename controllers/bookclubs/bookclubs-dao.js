import bookClubsModel from './bookclubs-model.js';
export const findBookClubs = async () => await bookClubsModel.find();
export const findBookClubById = async id => await bookClubsModel.findById(id);
export const createBookclub = async club => bookClubsModel.create(club);
export const deleteBookclub = async id => bookClubsModel.deleteOne({ _id: id });
export const updateBookclub = async (id, club) => bookClubsModel.updateOne({ _id: id }, { $set: club });
