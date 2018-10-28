const express = require("express")
const router = express.Router()

const getControllers = require('../controllers/controllers')

function getRoter() {
    router.get('/search',getControllers.showFilms);

    router.get('/page',getControllers.Page)

    router.get('/sort',getControllers.Sort)

    router.get('/id',getControllers.getId)

    return router
}

module.exports = getRoter;