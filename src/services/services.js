const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/local");
const schema = mongoose.Schema({
  vote_count: {
    type: Number
  },
  id: {
    type: Number
  },
  video: {
    type: Boolean
  },
  vote_average: {
    type: Number
  },
  title: {
    type: String
  },
  popularity: {
    type: Number
  },
  poster_path: {
    type: String
  },
  original_language: {
    type: String
  },
  original_title: {
    type: String
  },
  genre_ids: {
    type: Array
  },
  backdrop_path: {
    type: String
  },
  adult: {
    type: Boolean
  },
  overview: {
    type: String
  },
  release_date: {
    type: String
  }
});
const Films = mongoose.model("Films", schema);

function getServices() {
  const searchService = film => {
    Films.find({})
      .where("title", new RegExp(film, "i"))
      .then(films => res.json(films));
  };

  const showService = res => {
    Films.find({}).then(films => {
      res.json(films);
    });
  };

  const pageService = (offset, limit) => {
    Films.find()
      .limit(limit)
      .skip(offset)
      .then(films => res.json(films));
  };

  const sortService = (FieldOfFilm, direction) => {
    if (direction === "l")
      Films.find({})
        .sort([[FieldOfFilm, -1]])
        .then(films => res.json(films));
    else if (direction === "r")
      Films.find({})
        .sort([[FieldOfFilm, 1]])
        .then(films => res.json(films));
  };

  const idService = (ID, res) => {
    Films.findOne({ ID }).then(film => {
      res.json(film);
    });
  };
  const popularityService = res => {
    Films.find({})
      .sort([[popularity, 1]])
      .then(films => res.json(films));
  };

  return {
    searchService,
    pageService,
    sortService,
    idService,
    showService,
    popularityService
  };
}

module.exports = getServices();
