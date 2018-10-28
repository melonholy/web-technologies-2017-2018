const express = require("express")
const router = express.Router()
const fs=require('fs')
const films =JSON.parse(fs.readFileSync('data.json','utf8'))


function getRoter() {
    router.get('/search', (req, res) => {
        let title = req.query.q;
        res.send(films.filter(item => item.title.toString().toLowerCase().includes(title)).map(item => item.title))
    });

    router.get('/page', (req, res) => {
        let offset = req.query.off;
        let limit = req.query.lim;
        res.send(films.slice(Number(offset),Number(offset) + Number(limit)).map(item => item.title))
    });

    router.get('/sort',(req,res)=>{
        let FieldOfFilm = req.query.f;
        let direction = req.query.d;
        res.send(films.sort((a,b)=>{
            if(direction === 'l')
                return a[FieldOfFilm].localeCompare(b[FieldOfFilm]);
            else if (direction === 'r')
                return b[FieldOfFilm].localeCompare(a[FieldOfFilm])
        }).map(item=>item.title))
    });

    router.get('/id',(req,res)=>{
        let ID=req.query.i;
        res.send(films.filter(item=>{
            return item.id===Number(ID)
        }).map(item=>item.title))
    });

    return router
}

module.exports = getRoter;