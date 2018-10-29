const fs = require("fs");
const films = JSON.parse(fs.readFileSync("data.json", "utf8"));

function getServices() {
  const searchService = film => {
    return films
      .filter(item =>
        item.title
          .toString()
          .toLowerCase()
          .includes(film)
      )
      .map(item => item.title);
  };

  const pageService = (offset, limit) => {
    return films
      .slice(Number(offset), Number(offset) + Number(limit))
      .map(item => item.title);
  };

  const sortService = (FieldOfFilm, direction) => {
    return films
      .sort((a, b) => {
        if (direction === "l")
          return String(a[FieldOfFilm]).localeCompare(String(b[FieldOfFilm]));
        else if (direction === "r")
          return String(b[FieldOfFilm]).localeCompare(String(a[FieldOfFilm]));
      })
      .map(item => item.title);
  };

  const idService = ID => {
    return films
      .filter(item => {
        return item.id === Number(ID);
      })
      .map(item => item.title);
  };

  return { searchService, pageService, sortService, idService };
}

module.exports = getServices();
