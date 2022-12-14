const Musician = require('../models/musicians');
const Instrument = require('../models/instruments');

module.exports = {
  index,
  newMusician,
  create,
  show,
  editMusician,
  update,
  deleteMusician,
  search,
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

async function create(req, res) {
  try {
    // console.log(req.body, '<- req.body: create()/ctrl/musicians.js');
    const musicianDoc = await Musician.create(req.body);
    res.redirect('/musicians');
  } catch (err) {
    console.log(err, '<- err: controller/musicians/create()');
    return res.render('../views/musicians/new.ejs');
  }
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

async function deleteMusician(req, res) {
  try {
    await Musician.findByIdAndDelete(req.params.id);
    res.redirect('/musicians');
  } catch (err) {
    console.log(err, '<- err: controller/musicians/deleteMusician()');
    return res.render('../views/musicians/show.ejs');
  }
}

async function editMusician(req, res) {
  try {
    const musicianDoc = await Musician.findById(req.params.id);
    const instDoc = await Instrument.find();
    res.render('../views/musicians/edit.ejs', {
      instruments: instDoc,
      musicians: musicianDoc,
    });
  } catch (err) {
    res.send(err);
  }
}

function update(req, res) {
  Musician.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
    if (err) {
      res.send(err);
      console.log(err, '<--err: ctrl/musicians/update()');
    }
    res.redirect(`/musicians/${req.params.id}`);
  });
}

async function search(req, res) {
  // remove any space in the front or end of the search input
  let payload = req.body.payload.trim();
  // use RegEx to do a non-case-sensitive query
  let search = await Musician.find({
    name: { $regex: new RegExp(payload + '.*', 'i') },
  }).exec();
  // limit search result to 8
  search = search.slice(0, 8);
  res.send({ payload: search });
  // console.log(search, '<- search: search()/musicians.js/ctrler');
}
