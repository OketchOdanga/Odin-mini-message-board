const express = require("express");
const app = express();

//
app.get('/', (req, res) => {
    res.send("Hello world")
})
//

//add middlewares.
//add router middlewares
//add routes
//add error handlers

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));