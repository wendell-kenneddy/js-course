const UserModel = require('../models/UserModel.js');

module.exports = (req, res, next) => {
  const User = new UserModel(req.body);
  User.save();
  next();
};
