const  express = require('express');
const  app = express();
const getRouter = require('./src/rotes/rotes')()
require('./src/config/config')()

app.use(getRouter)

app.listen(process.env.PORT, () => {
    console.log("Server running on port 8081");
});