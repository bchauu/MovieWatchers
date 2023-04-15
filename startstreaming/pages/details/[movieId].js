import { useRouter } from "next/router";
import Grid from "@mui/material";
import { Rating } from "@mui/material";
import Header from "@/components/Header";
import { Fragment } from "react";
import { DetailsCard } from "@/card/DetailsCard";
import { MovieInfoCard } from "@/card/MovieInfoCard";



function Details() {

    const router = useRouter();
    console.log(router.query)
    const details = router.query;
    const genresList = router.query.genres.split(',')
    const genres = genresList.slice(0, genresList.length - 1);
    console.log(genres)

    const visualScore = (score) => {
        return score/2; 
    };
    const score = (visualScore(details.score));


    const transformDate = (date) => {
        const dateArr =  date.split('-');
        return `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`;

    }

    const today = new Date();

    const USDateFormat = transformDate(details.date);

    const url = 'https://image.tmdb.org/t/p/w300/';

    return (
        <Fragment>
            <Header></Header>
        <div className="movieDetails">
            <img className="mobileImg" src={url+details.poster}></img>
            <MovieInfoCard>
            <div className="mainData">
                <h2>{details.title}</h2>
                <p>{USDateFormat}</p>
            </div>
                <div className="metaData">
                    <Rating name="half-rating-read" defaultValue={score} precision={0.25} readOnly />
                    <p>{`${score}/5`}</p>
                </div>
                <div className="genreList">
                    {genres.map(genre => (
                        <h2 className="genre">{genre}</h2>
                    ))
                    }
                </div>
                <p>{details.desc}</p>
            </MovieInfoCard>
        </div>
        </Fragment>
    )
}

export default Details;