const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instrumentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: String,
});

module.exports = mongoose.model('Instrument', instrumentSchema);
