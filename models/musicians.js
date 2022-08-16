const mongoose = require('mongoose');

const musicianSchema = new mongoose.Schema({
  name: String,
  country: String,
  bio: String,
  pfp: String,
  instrument: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Instrument' }],
  // performance: Array,
  // comments: Array,
});

module.exports = mongoose.model('Musicians', musicianSchema);
