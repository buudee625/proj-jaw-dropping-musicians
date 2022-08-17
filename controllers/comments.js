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

function deleteComm(req, res) {}
