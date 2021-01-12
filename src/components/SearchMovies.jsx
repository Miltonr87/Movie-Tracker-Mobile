import React from "react";

export default function SearchMovies(){
    
    const searchMovies = async (event) => {
        event.preventDefault();
        console.log("submitting");

        const query = "Top gun"
        
        const url = `https://api.themoviedb.org/3/movie/550?api_key=503cd23467ddbca491d6127d9d19325b&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const response = await fetch(url);
            const data  = await response.json();
            console.log(data);
        }catch(err){
            console.error(err);
        }
    }
    
    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Typing a Name</label>
            <input className="input" type="text" name="query"
              placeholder="i.e. Top Gun"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}