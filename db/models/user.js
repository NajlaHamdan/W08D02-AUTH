const mongoose = require("mongoose");

const user = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    validate: [
      "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/",
      "Please fill a valid email address",
    ],
  },
  password: {type:String,required:true},
  role: {type:Array ,ref:mongoose.Schema.type.role},
});

module.exports = mongoose.model("user", user);
