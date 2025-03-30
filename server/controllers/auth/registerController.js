const User = require('../../models/User');
const Token = require('../../models/Token.js');
const crypto = require('crypto');
const sendEmail = require('../../utils/emailService');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const otp = crypto.randomInt(100000, 999999).toString();
  const user = new User({ name, email, password });
  await user.save();
  await Token.create({ userId: user._id, otp, otpExpires: Date.now() + 10 * 60 * 1000 });
  await sendEmail(email, 'OTP Verification', `Your OTP is ${otp}`);
  res.json({ message: 'OTP sent for verification' });
};