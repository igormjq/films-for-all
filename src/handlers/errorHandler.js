export const errorHandler = cb => 
  (req, res, next) => cb(req, res, next).catch(err => {
    console.log(err);
    res.status(err.status).json({ message: err.message })
  });