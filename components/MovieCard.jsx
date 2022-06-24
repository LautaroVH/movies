import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css"

export function MovieCard({movie}){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    const vote_average = movie.vote_average.asc
    
    return (
        <li className={styles.movieCard}>
            <Link to={"/movie/" + movie.id}>
            <img
            height={345}
            width={230}
            className={styles.movieImg} 
            src={imageUrl} 
            alt={movie.title}/>
            <div> {movie.title} </div>
            </Link>
            <div> {(movie.vote_average/2).toFixed(1) + "/5"} </div>
        </li>
    );

   
}

