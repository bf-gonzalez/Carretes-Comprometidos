const express = require("express");
const moviesRouter = require("./routes/moviesRouter");
const cors = require("cors")
const morgan = require("morgan")
const app = express()


app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(moviesRouter);

module.exports = app;