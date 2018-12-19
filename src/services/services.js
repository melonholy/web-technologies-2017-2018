const Sequelize = require("sequelize");
const data = require("../data");

const sequelize = new Sequelize("postgres", "postgres", "12345", {
  host: "localhost",
  dialect: "postgres"
});

const model = sequelize.define(
  "films",
  {
    vote_count: {
      type: Sequelize.INTEGER
    },
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    video: {
      type: Sequelize.BOOLEAN
    },
    vote_average: {
      type: Sequelize.REAL
    },
    title: {
      type: Sequelize.TEXT
    },
    popularity: {
      type: Sequelize.REAL
    },
    poster_path: {
      type: Sequelize.TEXT
    },
    original_language: {
      type: Sequelize.TEXT
    },
    original_title: {
      type: Sequelize.TEXT
    },
    backdrop_path: {
      type: Sequelize.TEXT
    },
    adult: {
      type: Sequelize.BOOLEAN
    },
    overview: {
      type: Sequelize.TEXT
    },
    release_date: {
      type: Sequelize.TEXT
    }
  },
  {
    timestamps: false
  }
);
sequelize.sync({ force: false });

const op = Sequelize.Op;

function getServices() {
  const searchService = async film => {
    return await sequelize.sync().then(() => {
      return model.findAll({
        where: {
          title: {
            [op.iLike]: "%" + film + "%"
          }
        }
      });
    });
  };

  const showService = async () => {
    return await sequelize.sync().then(() => {
      model.findAll();
    });
  };

  const pageService = async (offset, limit) => {
    return await sequelize.sync().then(() => {
      return model.findAll({
        offset: offset,
        limit: limit
      });
    });
  };

  const sortService = async (FieldOfFilm, direction) => {
    if (direction === "l")
      return await sequelize.sync().then(() => {
        return model.findAll({
          order: [[FieldOfFilm, 1]]
        });
      });
    else if (direction === "r")
      return await sequelize.sync().then(() => {
        return model.findAll({
          order: [[FieldOfFilm, 1]]
        });
      });
  };

  const idService = async ID => {
    return await sequelize.sync().then(() => {
      return model.findByPk(ID);
    });
  };

  return {
    searchService,
    pageService,
    sortService,
    idService,
    showService
  };
}
module.exports = getServices();
