import { get } from "../Util/httpClient";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css"
import { Spinner } from "./Spinner";
import {useSearchParams} from "react-router-dom"
import { useLocation } from "react-router";

export function useQuery(){  
    return new URLSearchParams(useLocation().search)
}

export function MoviesGrid () {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useSearchParams();
    //extraigo el parametro search
    const search = query.get("search");
    //llamada asincrona, efecto secundario (primero llama el return)
    useEffect(()=> {
        setIsLoading(true)
        const searchUrl = search 
        ? "/search/movie?query=" + search 
        : "/discover/movie";
        get(searchUrl).then((data) => {
            setMovies (data.results);
            // console.log(data)
            // console.log(data.results)

        setIsLoading(false)
            // console.log(movies);
        })
        //cargo mas de una vez el useEffect [search]
}, [search]); 
    if(isLoading) {
        return <Spinner />;
    }

    return (
        //con la funcion map convierto el arreglo de movies en un listado de tarjetas
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                //creo el componente de la tarjeta
                <MovieCard key={movie.id} movie={movie}/> 
            ))}
        </ul>
    );
};

