import React from "react";
import MovieCard from "./MovieCard";
export default function SearchMovie(){
    const [query , setQuery] = React.useState('');
    const [movie,setMovie] = React.useState([])
    const SearchMovie = async (e) =>{
    e.preventDefault();
    const url = 
    `https://api.themoviedb.org/3/search/movie?api_key=26260fd78a6529fdf126d01e1925e1e0&language=en-US&query=${query}&page=1&include_adult=false`;

    try{
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data.results);
    setMovie(data.results)
    }catch(err){
    console.error(err);
    }
}
//console.log(query)
    function handleChange(e){
        setQuery(preValue =>{
            return e.target.value;
        })
    }
    return(
       <div>
        <form className="form" onSubmit={SearchMovie}>

        <label className="label" htmlFor="query">Movie Name</label>

            <input className="input" type="text" name="query" onChange={handleChange}
             placeholder="i.e. Jurassic Park"/>

            <button className="button" type="submit">Search</button>

        </form>
        <div className="card-list">
                {movie.filter(movie => movie.poster_path).map(movie => (
                  <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
       </div>
    )
}