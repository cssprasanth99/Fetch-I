let movieInfoDiv = document.getElementById("movieInfo");

async function loadMovies() {
    let searchTerms = document.getElementById("movie-name").value;
    const URL = `https://www.omdbapi.com/?s=${searchTerms}&page=1&apikey=dc35342c`;
    try {
        const res = await fetch(`${URL}`);
        const data = await res.json();
        console.log(data);
        if (data.Response === "True") {
            displayMovie(data.Search);
        }
        else {
            movieInfoDiv.innerText = "Movie not found";
        }
    }
    catch (error) {
        console.log("Error fetching movie details", error);
    }
}


function displayMovie(movie) {
    movieInfoDiv.innerHTML = "";
    movie.forEach(ele => {
        let div = document.createElement("div");
        let movieTitle = document.createElement("p");
        let movieYear = document.createElement("p");
        let movieImg = document.createElement("img");
        div.className = "card";
        movieTitle.setAttribute("id", "movie-title");
        movieTitle.innerText = `Title: ${ele.Title}`;
        movieYear.innerText = `Year: ${ele.Year}`;
        movieImg.src = ele.Poster;
        movieImg.alt = "No Image";
        div.append(movieTitle, movieYear, movieImg);
        movieInfoDiv.append(div);
    });
}
