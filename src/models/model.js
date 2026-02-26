const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "invalid email address",
      ],
      unique: true,
    },

    name: {
      type: String,
      required: [true, "name is required"],
    },

    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

   userSchema.pre('save', async function (next) {
       if(!this.isModified("password")) {
              return next()
       }

       const hash = await bcrypt.hash(this.password, 10)
       this.password = hash

       return next()
   })


   userSchema.methods.comparepassword = async function(password){
      return bcrypt.compare(password, this.password)
   }

const User = mongoose.model("User", userSchema);

module.exports = User;
