const mongoos = require("mongoose");

const userSchema = mongoos.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: [true, "already used this email"],
  },
});

const User = mongoos.model("users", userSchema);

module.exports = User;
