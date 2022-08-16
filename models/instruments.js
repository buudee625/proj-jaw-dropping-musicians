const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instrumentSchema = new mongoose.Schema({
  name: String,
  type: String,
});

module.exports = mongoose.model('Instrument', instrumentSchema);
