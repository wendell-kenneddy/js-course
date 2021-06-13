module.exports = (err, req, res, next) => {
  if (err && err.code === 'EBADCSRFTOKEN') {
    return res.render('error', {
      errorMessage: 'BAD CSRF TOKEN'
    });
  }

  next();
};
