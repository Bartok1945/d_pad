const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.methods = {
  checkPassword: function (inputPassword) {
  return bcrypt.compareSync(inputPassword, this.password)
},
  hashPassword: plainTextPassword => {
  return bcrypt.hashSync(plainTextPassword, 10)
  }
}

UserSchema.pre('save', function (next) {
  // console.log("THIS IN PRE SAVE ==", this)
  if (!this.password) {
    console.log('models/user.js =======NO PASSWORD PROVIDED=======')
    next()
  } else {
    // console.log('models/user.js hashPassword in pre save');
    this.password = this.hashPassword(this.password)
    console.log('this.password ==', this.password)
    next()
  }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;