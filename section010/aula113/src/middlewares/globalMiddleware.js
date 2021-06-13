module.exports = (req, res, next) => {
  res.locals.title = 'Sample text';
  res.locals.nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  next();
};
