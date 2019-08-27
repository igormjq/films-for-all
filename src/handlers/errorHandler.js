export const errorHandler = cb => 
  (req, res, next) => cb(req, res, next).catch(err => {
    console.log(err);
    res.status(err.status || 400).json({ error: err.name, message: err.message })
  });