import React, {useState} from "react";

function SearchMovies() {

     // states for query and movies
     const [query, setQuery] = useState('');
     const [movies, setMovies] = useState([]) // Movies come with empty array
    
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
            console.log(data.results);
        }catch(err){
            console.error(err);
        }
    }
    
    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Typing a Name</label>
            <input className="input" type="text" name="query"
              placeholder="i.e. Top Gun"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              />
            <button className="button" type="submit">Search</button>
        </form>
    )
}

export default SearchMovies;