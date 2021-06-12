exports.getHome = (req, res) => {
  res.render('home');
  return;
};

exports.postHome = (req, res) => {
  res.render('posted');
  return;
}
