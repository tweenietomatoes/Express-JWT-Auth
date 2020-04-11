const express = require('express');

const { getTodo, postTodo } = require('../controllers/secret.controller');

const router = express.Router();

router.get('/', getTodo);
router.post('/', postTodo);

module.exports = router;
