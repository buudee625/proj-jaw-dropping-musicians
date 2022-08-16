const mongoose = require("mongoose");

const instrumentSchema = new mongoose.Schema({
  name: String,
  type: String,
});

module.exports = mongoose.model("Instrument", instrumentSchema);
