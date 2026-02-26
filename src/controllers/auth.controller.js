const usermodel = require('../models/model')




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


   

}


module.exports  = userregistercontroller