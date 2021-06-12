exports.globalMiddleware = (req, res, next) => {
  console.log(`Hi, I'm a middleware!`);
  next();
};
