import Link from "next/link";
import { useEffect } from "react";
import { MovieCard } from "@/card/MovieCard";

function MovieItem(props) {
    const movie = props.movie;
    const url = 'https://image.tmdb.org/t/p/w200/';
    const id = movie.id;

    const genreIds = {
        '28': 'Action',
        '12': "Adventure",
        '16': "Animation",
        '35': "Comedy",
        '80': "Crime",
        '99': "Documentary",
        '18': "Drama",
        '10751': "Family",
        '14': "Fantasy",
        '36': "History",
        '27': "Horror",
        '10402': "Music",
        '9648': "Music",
        '10749': "Romance",
        '878': "Science Fiction",
        '10770': "TV Movie",
        '53': "Thriller",
        '10752': "War",
        '37': "Western"
    }

    let genreStr = '';
    movie.genre_ids.forEach(id => {
        if (genreIds[id.toString()]) {
            genreStr += `${genreIds[id]},`;
        }
    })

    // let title = movie.title;
    // const shortenTitle = (title) => {
    //     if (title.length > 15) {
    //         title = title.slice(0, 15);
    //         title +='...'
    //     }
    // }

    // useEffect(() => {
    //     // shortenTitle(title);
    //     // console.log(movie.title.slice(0, 10))
    // }, [props.page])

    return (
        <div className="movieList">
            <MovieCard>
            {/* <img className="imgList" src={url+movie.poster_path}></img> */}
            <Link href={{
                pathname: `/details/${id}`,
                query: { title: movie.title,
                         lang: movie.original_language,
                         desc: movie.overview,
                         poster: movie.poster_path,
                         score: movie.vote_average,
                         genres: genreStr,
                         date: movie.release_date
                     }
            }}>
                <img className="imgLink" src={url+movie.poster_path}></img>
                <p className="pLink">{movie.title}</p>
            </Link>
            </MovieCard>
        </div>
    )
}

export default MovieItem;