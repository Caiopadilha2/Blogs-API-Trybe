const display = (req, res, next) => {
  try {
    const { displayName } = req.body;
  
    if (displayName.length < 8) {
      return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    return next();
    } catch (err) {
      return next(err);
    }    
};

const validEmail = (req, res, next) => {
  try {
    const { email } = req.body;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;
  
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ message: '"email" must be a valid email' });
  }
    return next();
  } catch (err) {
    return next(err);
  }    
};

const pass = (req, res, next) => {
  try {
    const { password } = req.body;
    
    if (!password || password.length < 6) {
      return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
    }
    next();
    } catch (err) {
     return next(err);
    }    
};

module.exports = {
  display,
  pass,
  validEmail,
}; 