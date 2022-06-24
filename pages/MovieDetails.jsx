import styles from "./MovieDetails.module.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../Util/httpClient";
import { Spinner } from "../components/Spinner";




export function MovieDetails(){
    //extraemos el parametro
    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState (true);
    const [movie, setMovie] = useState(null);


    


    // console.log(movieId);
    //efecto secundario
    useEffect(()=> {
        setIsLoading(true);

        get("/movie/" + movieId).then((data) => {
            
            setMovie(data);
            setIsLoading(false);
            console.log(data);
        })
    }, [movieId]);

    if(isLoading){
        return (
        <div><Spinner /></div>
        )
    }

    
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path
    const vote_average = movie.vote_average

    return <div className={styles.DetailsContainer}>
        <img className={`${styles.colDetail} ${styles.imgDetail}`}src={imageUrl} alt={movie.title}/>
        <div  className={`${styles.colDetail} ${styles.descDetail}`}>
            <p className={styles.firstItem}><strong>Title: </strong> {movie.title}</p>
            <p><strong>Rating: </strong> {(movie.vote_average) / 2 + "/5"}</p>
            <p><strong>Description: </strong> {movie.overview}</p>
        </div>
    </div>
}
