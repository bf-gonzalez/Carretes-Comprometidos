const express = require("express");
const {getMoviesController, postMoviesController} = require("../controllers/moviesController");
//const { postMovies } = require("../services/moviesService");
const moviesRouter = express.Router();

moviesRouter.get("/movies", getMoviesController);
moviesRouter.post("/movies", postMoviesController)

module.exports = moviesRouter;