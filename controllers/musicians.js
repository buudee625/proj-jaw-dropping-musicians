const Musician = require('../models/musicians');
const Instrument = require('../models/instruments');

module.exports = {
  index,
  newMusician,
  create,
  show,
};

async function index(req, res) {
  const musicianDoc = await Musician.find();
  const instDoc = await Instrument.find();
  // console.log(instDoc, '<- instDoc: ctrl/musicians/index()');
  try {
    res.render('../views/musicians/index.ejs', {
      musicians: musicianDoc,
      instruments: instDoc,
      title: 'Jaw Dropping Musician',
    });
  } catch (err) {
    res.send(err);
  }
}

async function newMusician(req, res) {
  try {
    const instDoc = await Instrument.find();
    res.render('../views/musicians/new.ejs', {
      instruments: instDoc,
    });
  } catch (err) {
    res.send(err);
  }
}

function create(req, res) {
  Musician.create(req.body, function (err, musicianDoc) {
    if (err) {
      console.log(err, '<- err: controller/musicians/create()');
      return res.render('../views/musicians/new.ejs');
    }
    // console.log(musicianDoc, '<- musicianDoc: ctrl/music/create()');
    res.redirect('/jdmusicians');
  });
}

async function show(req, res) {
  try {
    const musicianDoc = await Musician.findById(req.params.id);
    const instDoc = await Instrument.find({ _id: musicianDoc.instrument });
    // console.log(req.params.id, '<- req.params.id: ctrl/musicians/show()');
    // console.log(instDoc, '<- instDoc: ctrl/music/show()');
    // console.log(musicianDoc, '<- musicianDoc.req.params.id: ctrl/music/show()');
    res.render('../views/musicians/show.ejs', {
      musicians: musicianDoc,
      instruments: instDoc,
    });
  } catch (err) {
    res.send(err);
  }
}
