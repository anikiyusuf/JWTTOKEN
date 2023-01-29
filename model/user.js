const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
});


// The Pre-hook
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  // Password Validation
  userSchema.methods.isValidPassword = async function (password) {
    const compare = await bcrypt.compare(password, this.password);
  
    return compare;
  };
  


module.exports = mongoose.model('User', userSchema);