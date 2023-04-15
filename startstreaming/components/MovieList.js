import MovieItem from "./MovieItem";
import { Grid } from '@mui/material';

function Movie(props) {

    const movies = props.movies;
    const page = props.page;

    return (
        <div>
            <Grid container spacing={1} justifyContent='center' gap={3}>
            {movies.map(movie => (
                <MovieItem movie={movie} page={page} key={movie.id}></MovieItem>
            ))
            }
            </Grid>

        </div>
    )
}

export default Movie;