const express = require('express');
const router = express.Router();

const auth = require('./auth.route');
const secret = require('./secret.route');
const  authMiddleware = require('../middlewares/auth.middleware');

middlewares = [authMiddleware];

router.use('/auth',auth);
router.use('/secret', middlewares, secret);

module.exports = router;
