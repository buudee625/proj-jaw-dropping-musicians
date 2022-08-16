const Instrument = require('../models/instruments');

module.exports = {
  index,
  create,
};

async function index(req, res) {
  try {
    const instDoc = await Instrument.find();
    // console.log(instDoc, '<- instDoc: ctrl/inst/index()');
    res.render('../views/instruments/index.ejs', {
      title: 'JD Instruments',
      instruments: instDoc,
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
