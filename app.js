const express = require("express");
const app = express();
const path = require('node:path');

const indexRouter = require('./routes/router');

//add middlewares.
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

//
app.use(express.static(path.join(__dirname, 'public')));

//used to parse the form data into req.body
app.use(express.urlencoded({extended: true}));

//add router middlewares
app.use('/', indexRouter)

//add error handlers
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));