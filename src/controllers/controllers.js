const getServices = require("../services/services");
const Joi = require("joi");

const searchSchema = Joi.object().keys({
  title: Joi.string()
    .min(0)
    .required()
});
const pageSchema = Joi.object().keys({
  offset: Joi.number()
    .integer()
    .min(0)
    .required(),

  limit: Joi.number()
    .integer()
    .min(0)
    .max(50)
    .required()
});

const sortSchema = Joi.object().keys({
  field: Joi.required(),

  direction: Joi.valid("r", "l").required()
});

const id = Joi.object().keys({
  id: Joi.number()
    .integer()
    .required()
});
const popularity = Joi.object().keys({
  popularity: Joi.number().required()
});

const searchFilms = (req, res) => {
  Joi.validate(req.query, searchSchema, (err, value) => {
    if (err) {
      res.status(400).json({
        status: "Bad request",
        message: "Invalid parameters"
      });
    } else {
      getServices.searchService(value.title, res);
    }
  });
};

const Page = (req, res) => {
  Joi.validate(req.query, pageSchema, (err, value) => {
    if (err) {
      res.status(400).json({
        status: "Bad request",
        message: "Invalid parameters"
      });
    } else {
      res.send(getServices.pageService(value.offset, value.limit));
    }
  });
};

const Sort = (req, res) => {
  Joi.validate(req.query, sortSchema, (err, value) => {
    if (err) {
      res.status(400).json({
        status: "Bad request",
        message: "Invalid parameters"
      });
    } else {
      getServices.sortService(value.field, value.direction, res);
    }
  });
};

const getId = (req, res) => {
  Joi.validate(req.query, id, (err, value) => {
    if (err) {
      res.status(400).json({
        status: "Bad request",
        message: "Invalid parameters"
      });
    } else {
      getServices.idService(value.id, res);
    }
  });
};

const getFilms = (req, res) => {
  getServices.showService(res);
};
const getPopularity = (req, res) => {
  Joi.validate(req.query, err => {
    if (err) {
      res.status(400).json({
        status: "Bad request",
        message: "Invalid parameters"
      });
    } else {
      getServices.popularityService(res);
    }
  });
};

module.exports = { searchFilms, Page, getFilms, getId, Sort, getPopularity };
