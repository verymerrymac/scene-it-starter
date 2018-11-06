
var movieContainer = document.getElementById("movies-container");

function renderMovies(movieArray) {
    var moviesHTML = movieArray.map(function(currentMovie) {
 
return `
<div class="card">
    <img class="card-img-top" src="${currentMovie.Poster}" alt="Image" />
        <div class="card-title">${currentMovie.Title}</div>
        <div class="card-text">${currentMovie.Year}</div>
        <button onclick="saveToWatchList('${movie.imdbID}') class=movie-button btn btn-primary">Add to list!</button>
</div>	
`

});

movieContainer.innerHTML = moviesHTML.join("");

}

document.getElementById("search-form").addEventListener("submit", function(e){
    e.preventDefault();
    var movieSearch = document.getElementById("movieSearch").value;
    
    axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=63050b82").then(function(response) {

    console.log(response);

        renderMovies(response.data.Search);
        movies = response.data.Search;

    });

});

