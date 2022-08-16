const Musicians = require('../models/musicians');
const Instrument = require('../models/instruments');

module.exports = {
  index,
  newMusician,
  create,
  show,
};

async function index(req, res) {
  const musicianDoc = await Musicians.find();
  const instDoc = await Instrument.find();
  // console.log(instDoc, '<- instDoc: ctrl/musicians/index()');
  try {
    res.render('../views/musicians/index.ejs', {
      musicians: musicianDoc,
      instruments: instDoc,
      title: 'Jaw Dropping Musicians',
    });
  } catch (err) {
    return res.render(err);
  }
}

async function newMusician(req, res) {
  try {
    const instDoc = await Instrument.find();
    console.log(instDoc, '<- instDoc: ctrl/musicians/newMusician()');
    res.render('../views/musicians/new.ejs', {
      instruments: instDoc,
    });
  } catch (err) {
    return res.render(err);
  }
}

function create(req, res) {
  Musicians.create(req.body, function (err, musicianDoc) {
    if (err) {
      console.log(err, '<- err from controller/musicians/create()');
      return res.render('../views/musicians/new.ejs');
    }
    console.log(musicianDoc, '<- musicianDoc from create()');
    res.redirect('/jdmusicians');
  });
}

async function show(req, res) {
  const musicianDoc = await Musicians.findById(req.params.id);
  // console.log(req.params.id, '<- req.params.id: ctrl/musicians/show()');
  res.render('../views/musicians/show.ejs', {
    musicians: musicianDoc,
  });
}
