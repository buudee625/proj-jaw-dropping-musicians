const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    content: { type: String, maxlength: 500 },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true,
  }
);

const videoSchema = new mongoose.Schema({
  url: { type: String, required: true, unique: true },
});

const musicianSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: String,
  bio: { type: String, maxlength: 750 },
  pfp: String,
  instrument: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Instrument' }],
  comment: [commentSchema],
  video: [videoSchema],
});

module.exports = mongoose.model('Musicians', musicianSchema);
