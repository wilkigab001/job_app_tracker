require("dotenv").config();
const { SECRET } = process.env;
const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (username, password) => {
  return (
    jwt.sign(
      {
        username,
        id,
      },
      SECRET
    ),
    {
      expiresIn: "2 days",
    }
  );
};

module.exports = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;
      let foundUser = await User.findOne({ where: { username } });
      if (foundUser) {
        res.status(400).send("Already a user");
      } else {
        const salt = bcrypt.genSaltSync(20);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await User.create({
          username,
          hashPass: hash,
        });
        let token = createToken(
          newUser.dataValues.username,
          newUser.dataValues.id
        );
        const exp = Date.now() + 1000 * 60 * 60 * 48;
        res.status(200).send({
          username: newUser.dataValues.username,
          userId: newUser.dataValues.userId,
          token: token,
          exp: exp,
        });
      }
    } catch (err) {
      console.log(err, "error in registering user");
      res.sendStatus(400);
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      let foundUser = await User.findOne({ where: { username } });
      console.log(foundUser);
      if (foundUser) {
        const isAuthenticated = bcrypt.compareSync(
          password,
          foundUser.hashPass
        );
        if (isAuthenticated) {
          const token = createToken(
            foundUser.dataValues.username,
            foundUser.dataValues.id
          );
          const exp = Date.now() + 1000 * 60 * 60 * 48;
          res.status(200).send({
            username: foundUser.dataValues.username,
            userId: foundUser.dataValues.userId,
            token,
            exp,
          });
        } else {
          res.status(400).send("No user found");
        }
      }
    } catch (err) {
      console.log(err);
    }
  },
};
