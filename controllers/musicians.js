const Musicians = require("../models/musicians");

module.exports = {
  index,
  newMusician,
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
