const jwt = require('jsonwebtoken');
require("dotenv").config();

const userModel = require('../models/user.model');

const signIn = (req, res, next) => {

  let loginType;
  let loginInstrument;
  let password;

  if ((!req.body.username || !req.body.email) && !req.body.password) {
    res.status(401).json({
     message: 'Email or username and password is empty'
    });
  }
  if (req.body.username) {
    loginType = 0;
    loginInstrument = req.body.username;
  }
  else if (req.body.email) {
    loginType = 1;
    loginInstrument = req.body.email;
  }

  password = req.body.password;

let whereStatement;

  if (loginType === 0) {
    whereStatement = {
     where: {
        username: loginInstrument,
        password: password
     }
   };
 } else {
   whereStatement = {
    where: {
       email: loginInstrument,
       password: password
    }
  };
 }

 userModel.findOne(whereStatement).then( user => {
   if (!user) {
     return res.status(401).json({
     message: 'User not found',
   });
 }

  const token = jwt.sign({
    Id: user.Id,
    Email: user.Email
  },
  process.env.SECRET_KEY,
  {
     expiresIn : "24h"
  }
  );

  return res.status(200).json({ message: 'OK', token: token, expiresIn: "24h" });

}).catch(error => res.status(401).json({message: 'Fail', error: error }));

};

module.exports = { signIn };
