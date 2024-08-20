//const {post} = require("../server");
const {getMovies, postMovies} = require("../services/moviesService");



const getMoviesController = async (req, res)=>{

    try{
        const movies = await getMovies();

        res.status(200).json(movies);
    }catch(error){
        console.error("Error al obtener las peliculas", error);
        res.status(500).json({error: "Error al obtener las peliculas"});
    }
};

const postMoviesController = async (req, res) =>{
    try{
        const movie = req.body;

        const postMovie = await postMovies(movie)

        res.status(201).json(postMovie);
    }catch(error){
        console.error("Error al crear la pelicula", error);
        res.status(500).json({error: "Error al crear la pelicula"});
    }
};

module.exports = {getMoviesController, postMoviesController};