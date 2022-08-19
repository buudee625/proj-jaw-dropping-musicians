const Musician = require('../models/musicians');
const Instrument = require('../models/instruments');

module.exports = {
  index,
  create,
  show,
};

async function index(req, res) {
  try {
    const musicianDoc = await Musician.find();
    const instDoc = await Instrument.find();
    const vocalDoc = await Instrument.find({ type: 'vocal' });
    const stringDoc = await Instrument.find({ type: 'string' });
    const brassDoc = await Instrument.find({ type: 'brass' });
    const woodwindDoc = await Instrument.find({ type: 'woodwind' });
    const keyDoc = await Instrument.find({ type: 'keys' });
    const percDoc = await Instrument.find({ type: 'percussion' });
    const otherDoc = await Instrument.find({ type: 'others' });

    // console.log(instDoc, '<- instDoc: ctrl/inst/index()');
    // console.log(musicianDoc, '<- musicianDoc: ctrl/instr/index()');
    res.render('../views/instruments/index.ejs', {
      title: 'JD Instruments',
      instruments: instDoc,
      musicians: musicianDoc,
      vocals: vocalDoc,
      strings: stringDoc,
      brass: brassDoc,
      woodwinds: woodwindDoc,
      keys: keyDoc,
      percussions: percDoc,
      others: otherDoc,
    });
  } catch (err) {
    res.send(err);
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
    res.redirect('/instruments');
  });
}

async function show(req, res) {
  try {
    // console.log(req.params.id, '<- req.params.id: ctrl/inst/show()');
    const instDoc = await Instrument.findById(req.params.id);
    const musicianDoc = await Musician.find({
      instrument: { _id: req.params.id },
    });
    // console.log(musicianDoc, '<- musicianDoc: ctrl/inst/show()');
    res.render('../views/instruments/show.ejs', {
      instruments: instDoc,
      musicians: musicianDoc,
    });
  } catch (err) {
    res.send(err);
  }
}
