const mongoose = require("mongoose");

const musiciansSchema = new mongoose.Schema({
  name: String,
  country: String,
  bio: String,
  // pfp: String,
  instrument: Array,
  // performance: Array,
  // comments: Array,
});

module.exports = mongoose.model("Musicians", musiciansSchema);
