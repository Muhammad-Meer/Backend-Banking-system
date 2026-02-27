const usermodel = require("../models/model");
const jwt = require("jsonwebtoken");

/* post   /api/auth/register        */

async function userregistercontroller(req, res) {
  const { email, name, password } = req.body;

  const isuserexist = await usermodel.findOne({
    email: email,
  });

  if (isuserexist) {
    return res.status(422).json({
      message: "user alredy exist",
      status: "failed",
    });
  }

  const createuser = await usermodel.create({
    email,
    password,
    name,
  });

  const jwttoken = jwt.sign(
    { userId: createuser._id },
    process.env.JWT_SECRET,
    { expiresIn: "5d" },
  );

  res.cookie("token", jwttoken);

  res.status(201).json({
    userdeta: {
      _id: createuser._id,
      email: createuser.email,
      name: createuser.name,
    },
    jwttoken,
  });
}


async function userrlogincontroller(req, res) {
  const { email, password } = req.body;

  const useremail= await usermodel.findOne({email})


  if(!useremail) {
    return res.status(401).json({
      message: "email or password invalid"
    })
  }

  const isuservalid = await user.comparePassword(password)

  if(!isuservalid) {
    return res.status(401).json({
      message: "email or password is unvalid"
    })
  }

  
  const jwttoken = jwt.sign(
    { userId: createuser._id },
    process.env.JWT_SECRET,
    { expiresIn: "5d" },
  );

  res.cookie("token", jwttoken);

  res.status(200).json({
    userdeta: {
      _id: createuser._id,
      email: createuser.email,
      name: createuser.name,
    },
    jwttoken,
  });
} 

module.exports = { userregistercontroller, userrlogincontroller };
