import bookClubsModel from './bookclubs-model.js';
export const findBookclub = (id) => bookClubsModel.findById(id);
export const createBookclub = (club) => bookClubsModel.create(club);
export const deleteBookclub = (bid) => bookClubsModel.deleteOne({_id: bid});
export const updateBookclub = (bid, club) => bookClubsModel.updateOne({_id: bid}, {$set: club})
