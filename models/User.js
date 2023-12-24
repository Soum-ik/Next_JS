const mongoose = require("mongoose");

const UserData = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true,   },
    age: { type: Number, required: true },
  },
  { timeseries: true }
);

module.exports = mongoose.models.Users || mongoose.model("users", UserData);
