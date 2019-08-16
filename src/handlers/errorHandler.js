export const errorHandler = cb => 
  (req, res, next) => cb(req, res, next).catch(err => res.status(400).json({ error: err.toString() }));