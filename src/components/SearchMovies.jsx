import React, {useState} from "react";

function SearchMovies(){
    
    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);
    
    const searchMovies = async (event) => {
        event.preventDefault();
        console.log("submitting");

        /* Original hard-coded value used to test the API callback */
        // const query = "Top Gun"
                
        const url = `https://api.themoviedb.org/3/search/movie?api_key=503cd23467ddbca491d6127d9d19325b&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const response = await fetch(url);
            const data  = await response.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }
    
    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query"></label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Top Gun"
                    value={query} onChange={(event) => setQuery(event.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />
                        <div className="card--content">
                        <h3 className="card--title">{movie.title}</h3>
                        <p><small>🎞️ {movie.release_date}</small></p>
                        <p><small>✨ {movie.vote_average}</small></p>
                        <p className="card--desc">{movie.overview}</p>
                        </div>

                    </div>
                ))}
            </div>    
        </>
    )
}

export default SearchMovies;