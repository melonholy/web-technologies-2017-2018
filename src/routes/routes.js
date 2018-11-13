const express = require("express");
const router = express.Router();

const {
  searchFilms,
  Page,
  Sort,
  getId,
  getFilms
} = require("../controllers/controllers");

function getRoter() {
  router.get("/search", searchFilms);

  router.get("/page", Page);

  router.get("/sort", Sort);

  router.get("/id", getId);

  router.get("/show", getFilms);

  router.get("/", (req, res) => {
    return res.send("Hello,API here");
  });

  return router;
}

module.exports = getRoter;
