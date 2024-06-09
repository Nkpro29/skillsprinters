import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    validate: [validator.isEmail, 'Please provide valid email'],
  },
  photo: [String],
  password: {
    type: String,
    required: [true, "password is mandatory"],
    minlength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [
      true,
      "cannot proceed further without entering confirm password.",
    ],
    validate: {
      //this only works if we save
      validator: function (el) {
        return el === this.password;
      },
    },
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "client", "freelancer"],
    default: "freelancer",
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  passwordChangedAt: Date, 
});



const User = mongoose.model("User", userSchema);

export default User;
