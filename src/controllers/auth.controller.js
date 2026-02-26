const usermodel = require('../models/model')
const jwt = require('jsonwebtoken')




 async function userregistercontroller(req , res ) {

   const {email , name,password } = req.body


   const isuserexist = await usermodel.findOne({
    email: email
   })

   if(isuserexist) {
    return res.status(422).json({
      message: "user alredy exist",
      status: "failed"
    })
   }

   const createuser = await usermodel.create({
    email, password, name
   })


   const jwttoken = jwt.sign({userId: createuser._id}, process.env.JWT_SECRET, {expiresIn: "5d"})

   res.cookie("token",jwttoken)

   res.status(201).json({
       userdeta: {
        _id: createuser._id,
        email: createuser.email,
        name: createuser.name,
       },
       jwttoken
   })
}


module.exports  = userregistercontroller