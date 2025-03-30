const Token = require('../../models/Token');
const User = require('../../models/User');
const crypto = require('crypto');
const sendEmail = require('../../utils/emailService');

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: 'User not found' });
  const resetToken = crypto.randomBytes(32).toString('hex');
  await Token.create({ userId: user._id, resetToken, resetTokenExpires: Date.now() + 10 * 60 * 1000 });
  await sendEmail(email, 'Password Reset', `Your reset token is ${resetToken}`);
  res.json({ message: 'Reset token sent' });
};