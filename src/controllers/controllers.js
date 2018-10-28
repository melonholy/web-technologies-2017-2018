const getServices = require('../services/services')

function getControllers() {

    const searchFilms=(req, res) => {
        res.send(getServices.searchService(req.query.title))
    };

    const Page =(req, res) => {
        res.send(getServices.pageService(req.query.off,req.query.lim))
    };

    const Sort = (req,res)=>{
        res.send(getServices.sortService(req.query.f,req.query.d))
    };

    const getId = (req,res)=>{
        res.send(getServices.idService(req.query.i))
    };

    return {searchFilms,Page,Sort,getId}
}

module.exports = getControllers();