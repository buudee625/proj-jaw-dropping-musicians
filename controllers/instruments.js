const Musician = require('../models/musicians');
const Instrument = require('../models/instruments');

module.exports = {
  index,
  create,
  show,
};

async function index(req, res) {
  try {
    const instDoc = await Instrument.find();
    const musicianDoc = await Musician.find();
    // console.log(instDoc, '<- instDoc: ctrl/inst/index()');
    // console.log(musicianDoc, '<- musicianDoc: ctrl/instr/index()');
    res.render('../views/instruments/index.ejs', {
      title: 'JD Instruments',
      instruments: instDoc,
      musicians: musicianDoc,
    });
  } catch (err) {
    return res.render(err);
  }
}

function create(req, res) {
  // console.log(req.body, '<- req.body: ctrl/inst/create()');
  Instrument.create(req.body, function (err, instDoc) {
    if (err) {
      console.log(err, '<- err: ctrl/inst/create()');
      return res.render('views/instruments/index.ejs');
    }
    console.log(instDoc, '<- instDoc: ctrl/inst/create()');
    res.redirect('/jdmusicians');
  });
}

async function show(req, res) {
  try {
    // console.log(req.params.id, '<- req.params.id: ctrl/inst/show()');
    const musicianDoc = await Musician.find({
      instrument: { _id: req.params.id },
    });
    console.log(musicianDoc, '<- musicianDoc: ctrl/inst/show()');

    // console.log(instDoc, '<- instDoc: ctrl/inst/show()');
    res.render('../views/instruments/show.ejs', {
      musicians: musicianDoc,
    });
  } catch (err) {
    return res.render(err);
  }
}
