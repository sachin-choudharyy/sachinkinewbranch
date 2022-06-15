const user = require("../models/user");
const bcrypt = require("bcrypt");

module.exports = {
  userpostdata: async (req, res) => {
    try {
      const { fname, lname, email, password, contectnumber } = req.body;
      const data = new user({ fname, lname, email, password, contectnumber });
      data.password = await bcrypt.hash(data.password, 10);
      await data.save();
      res.json({
        msg: "user register",
        data: data,
      });
    } catch (err) {
      res.json({
        msg: "user not register",
      });
    }
  },
  getdatauser: async (req, res) => {
    try {
      const data = await user.find();
      res.json({
        msg: "data find",
        data: data,
      });
    } catch (err) {
      res.json({
        msg: "data not find",
      });
    }
  },
  loginuser: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const data = await user.findOne({ email: email });
        if (data != null) {
          const data1 = await bcrypt.compare(password, data.password);
          if (data.email == email && data1) {
            res.json({
              msg: "login user",
            });
          } else {
            res.json({
              msg: "password not match",
            });
          }
        } else {
          res.json({
            msg: "mail not found",
          });
        }
      } else {
        res.json({
          msg: "all field required",
        });
      }
    } catch (err) {
      console.log(err);
    }
  },
};
