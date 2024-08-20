const moviesContainer = document.getElementById("movies-container");




const renderCards = (data) => {
    console.log("Data received in renderCards:", data);

    if (!Array.isArray(data)) {
        console.error("Expected an array but received:", typeof data);
        return;
    }

    data.forEach((movie) =>{

        if (typeof movie !== 'object') {
            console.error("Expected an object but received:", typeof movie);
            return;
        }

        const { title, poster, year, director, duration, genre, rate } = movie;

        if (!title || !poster || !year || !director || !duration || !genre || !rate) {
            console.error("Missing property in movie object:", movie);
            return;
        }


        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        const movieTitle = document.createElement("h3");
        movieTitle.classList.add("tituloPeli")
        movieTitle.textContent = movie.title;
        const movieImage = document.createElement('img');
        movieImage.src = movie.poster;
        movieImage.alt = movie.title;
    
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieImage);
        
        moviesContainer.appendChild(movieCard);

        //const descriptionCard = document.createElement('div')
        //descriptionCard.classList.add("description")
        const movieYear = document.createElement("p");
        movieYear.classList.add("description")
        movieYear.textContent = `Year: ${movie.year}`;
        const movieDirector = document.createElement("p");
        movieDirector.classList.add("description")
        movieDirector.textContent = `Director: ${movie.director}`;
        const movieDuration = document.createElement("p");
        movieDuration.classList.add("description")
        movieDuration.textContent = `Duration: ${movie.duration}`;
        const movieGenre = document.createElement("p");
        movieGenre.classList.add("description")
        movieGenre.textContent = `Genre: ${movie.genre.join(", ")}`;
        const movieRate = document.createElement("p");
        movieRate.classList.add("description")
        movieRate.textContent = `Rate ${movie.rate}`;
        
        movieCard.appendChild(movieYear);
        movieCard.appendChild(movieDirector);
        movieCard.appendChild(movieDuration);
        movieCard.appendChild(movieRate);
 
    });
};

module.exports = renderCards;
