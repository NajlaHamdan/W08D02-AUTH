const userModel = require("./../../db/models/user");
const register = (req, res) => {
  const { email, password, role } = req.body;
  const newUser = new userModel({
    role,
    email,
    password,
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
  const {  email, password } = req.body;
  userModel
    .findOne({ email })//with find will return email and say not valid if it is valid
    .then((result) => {
      if (result) {
        if (result.email == email) {
          if (result.password == password) {
            res.status("200").json(result);
          } else {
            //   console.log("hi");
            res.status("404").json("email or password is not valid");
          }
        } else {
            // console.log("hi");
          res.status("404").json("email or password is not valid");
        }
      } else {
        res.status("404").json("does not exist");
      }
    })
    .catch((err) => res.status("404").json(err));
};

module.exports = { register, login };
