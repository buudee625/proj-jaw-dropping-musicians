const Musician = require('../models/musicians');

module.exports = {
  create,
};

async function create(req, res) {
  try {
    const musicianDoc = await Musician.findById(req.params.id);
    // console.log(req.body, '<- req.body: ctrl/videos/create()');
    // console.log(req.body.url, '<- req.body.url: ctrl/videos/create()');
    // console.log(musicianDoc, '<- musicianDoc: ctrl/videos/create()');
    musicianDoc.video.push(req.body);
    await musicianDoc.save();
    res.redirect(`/jdmusicians/${req.params.id}`);
  } catch (err) {
    res.send(err);
  }
}
