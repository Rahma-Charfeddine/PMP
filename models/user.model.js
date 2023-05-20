const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  { registartion_number: {
      type: String, // 
      required: true,
      minlength: 2,
      maxlength: 32,
      uppercase: true,
  },

    family_name: {
      type: String, // 
      required: true,
      minlength: 6,
      maxlength: 15,
    },
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 32,
    },
    gender: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 8,
    },
    nTel: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 16,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
      minlength: 4,
      maxlength: 10
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 256
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
    is_dep_manager: {
      type: Boolean,
      default: false,
    },
    is_board_member: {
      type: Boolean,
      default: false,
    },
    department: {
      type: String,
      default: null,
    }
  },
  {
    timestamps: true,
  }
);
// pre data treatment : 
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;