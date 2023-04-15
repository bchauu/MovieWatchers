import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import Header from "@/components/Header";
import { Fragment } from "react";
import { MovieInfoCard } from "@/card/MovieInfoCard";



function Details() {

    const [haveFetched, setHaveFetched] = useState(false);
    const [genres, setGenre] = useState([]);
    const [USDateFormat, setUSDateFormat] = useState('');

    const router = useRouter();
    const details = router.query;
    
 
    useEffect(() => {
        if (details != undefined) {
            const genresList = details.genres.split(',');
            setGenre([...genresList.slice(0, genresList.length - 1)]);
            setUSDateFormat(transformDate(details.date));
            setHaveFetched(true);
        }

    }, [])

    const visualScore = (score) => {
        return score/2; 
    };
    const score = (visualScore(details.score));


    const transformDate = (date) => {
        const dateArr =  date.split('-');
        return `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`;

    }

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
                {haveFetched
                    ? <div className="genreList">
                    {genres.map(genre => (
                        <h2 className="genre">{genre}</h2>
                    ))
                    }
                     </div>
                    : <div></div>
                }
                <p>{details.desc}</p>
            </MovieInfoCard>
        </div>
    </Fragment>
    )
}

export default Details;