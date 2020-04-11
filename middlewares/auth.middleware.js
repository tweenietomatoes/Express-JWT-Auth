require("dotenv").config();
const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      req.userData = decodedToken;
   next();
    }
    catch (err) {
      return res.status(401).send({ message: 'Unauthorized Access' });
    }
}

module.exports = authMiddleware;
