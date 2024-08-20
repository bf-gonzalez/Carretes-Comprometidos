const Movie = require("../models/movies")


const getMovies = async () => {
  try{
    return await Movie.find();
  }catch (error){
    console.error("Error al obtener las peliculas", error);
    throw new Error("Error al obtener las peliculas");
  }  
};

const postMovies = async(movie)=>{
  try{
    movie.rate = Number(movie.rate)
    return await Movie.create(movie);
  }catch(error){
    console.error("Error al crear lla pelicula:", error);
    throw new Error("Error al crear la pelicula");
  }
    
};

module.exports = {getMovies, postMovies};