const tokenSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    otp: String,
    otpExpires: Date,
    resetToken: String,
    resetTokenExpires: Date,
  });
  module.exports = mongoose.model('Token', tokenSchema);