const userModel = require("./../../db/models/user");
const register = (req, res) => {
  const { email, password,role } = req.body;
  const newUser = new userModel({
    role,
    email,
    password
  });
  newUser
    .save()
    .then((result) => {
      res.status("201").json(result);
    })
    .catch((err) => {
      res.status("404").json(err);
    });
};
const login = (req, res) => {
    roleModel
    .find({})
    .then((result) => res.status("200").json(result))
    .catch((err) => res.status("200").json(err));
};

module.exports = {register, login };
