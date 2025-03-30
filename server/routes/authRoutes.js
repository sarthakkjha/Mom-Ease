const express = require('express');
const { register } = require('../controllers/auth/registerController');
const { login } = require('../controllers/auth/loginController');
const { forgotPassword } = require('../controllers/auth/passwordController');
const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
module.exports = router;