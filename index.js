const  express = require('express');
const  app = express();
const getRouter = require('./src/rotes/rotes')()

app.use(getRouter)

app.listen(8081, () => {
    console.log("Server running on port 8081");
});