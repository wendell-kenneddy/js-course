const { getDbAndCol } = require('../models/mongo.js');

exports.getHome = (req, res) => {
  res.render('home');
  return;
};

exports.postHome = async (req, res) => {
  const col = getDbAndCol(process.env.DB, process.env.COL);
  await col.insertOne(req.body);
  res.render('posted');
  return;
}
