const  express = require('express')
const  app = express();
const films = require('./Films.js')

app.get('/search', (req,res)=> {
    let a = req.query.q
    res.send(films.map(item => item.title.toString().toLowerCase().includes(a)));
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});