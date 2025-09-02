const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, unique: true, sparse: true }, // optional for MetaMask login
  full_name: { type: String },
  password: { type: String },
  walletAddress: { type: String, unique: true, sparse: true }, // new field for MetaMask
  role: { type: String, enum: ["admin", "user"], default: "user" },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
