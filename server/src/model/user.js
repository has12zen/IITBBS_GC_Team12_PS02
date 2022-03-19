const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    branch: String,
    img: String,
    bio: {
      type: String,
      maxlength: 200,
    },
    year: Number,
    yearOfAdmission: Number,
    yearOfGraduation: Number,
    isBlacklisted: { type: Boolean, default: false, required: true },
    role: {
      type: Enumerator,
      enum: ["user", "admin"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
