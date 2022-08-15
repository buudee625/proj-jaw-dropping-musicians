const Musicians = require("../models/musicians");

module.exports = {
  index,
  newMusician,
  create,
  show,
};

async function index(req, res) {
  const musicianDoc = await Musicians.find();
  res.render("../views/musicians/index.ejs", {
    musicians: musicianDoc,
    title: "Jaw Dropping Musicians",
  });
}

function newMusician(req, res) {
  res.render("../views/musicians/new.ejs");
}

function create(req, res) {
  Musicians.create(req.body, function (err, musicianDoc) {
    if (err) {
      console.log(err, "<- err from controller/musicians/create()");
      return res.render("../views/musicians/new.ejs");
    }
    console.log(musicianDoc, "<- musicianDoc from create()");
    res.redirect("/jdmusicians");
  });
}

async function show(req, res) {
  const musicianDoc = await Musicians.findById(req.params.id);
  console.log(req.params.id, "<- req._id from show()");
  res.render("../views/musicians/show.ejs", {
    musicians: musicianDoc,
  });
}
