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

const searchFilms = async (req, res) => {
  await Joi.validate(req.query, searchSchema, async (err, value) => {
    if (err) {
      res.status(400).json({
        status: "Bad request",
        message: "Invalid parameters"
      });
    } else {
      await res.send(getServices.searchService(value.title));
    }
  });
};

const Page = async (req, res) => {
  await Joi.validate(req.query, pageSchema, async (err, value) => {
    if (err) {
      res.status(400).json({
        status: "Bad request",
        message: "Invalid parameters"
      });
    } else {
      await res.send(getServices.pageService(value.offset, value.limit));
    }
  });
};

const Sort = async (req, res) => {
  await Joi.validate(req.query, sortSchema, async (err, value) => {
    if (err) {
      res.status(400).json({
        status: "Bad request",
        message: "Invalid parameters"
      });
    } else {
      await res.send(getServices.sortService(value.field, value.direction));
    }
  });
};

const getId = async (req, res) => {
  await Joi.validate(req.query, id, async (err, value) => {
    if (err) {
      res.status(400).json({
        status: "Bad request",
        message: "Invalid parameters"
      });
    } else {
      await res.send(getServices.idService(value.id));
    }
  });
};

const getFilms = async (req, res) => {
  await res.send(getServices.showService());
};

module.exports = { searchFilms, Page, getFilms, getId, Sort };
