const Musician = require('../models/musicians');
const Instrument = require('../models/instruments');

module.exports = {
  create,
  deleteComm,
};

async function create(req, res) {
  try {
    // console.log(req.user, ',<- req.user: ctrl/comments/create()');
    // console.log(req.body, '<- req.body: ctrl/comments/create()');
    const musicianDoc = await Musician.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    musicianDoc.comment.push(req.body);
    await musicianDoc.save();
    res.redirect(`/jdmusicians/${req.params.id}`);
  } catch (err) {
    res.send(err);
  }
}

async function deleteComm(req, res) {
  try {
    const musicianDoc = await Musician.findOne({
      'comment._id': req.params.id,
      'comment.user': req.user._id,
    });
    console.log(req.params.id, '<- req.params.id: deleteComm');
    console.log(musicianDoc, '<- musicianDoc: deleteComm');
    if (!musicianDoc) return res.redirect('/jdmusicians');
    musicianDoc.comment.remove(req.params.id);
    await musicianDoc.save();
    res.redirect(`/jdmusicians/`);
  } catch (err) {
    res.send(err);
  }
}
