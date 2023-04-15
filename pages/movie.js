import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import { Pagination } from '@mui/material';
import { ListCard } from '@/card/ListCard';



function MoviePage() {
    const [popular, setPopular] = useState([]);
    const [popularPage, setPopularPage] = useState(1);
    const [upcomingPage, setUpcomingPage] = useState(1);
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3cda0804d7e6fb92273c090b8e4e1f22&language=en-US&page=${popularPage}`) 
            .then(res => res.json())
            .then(res => setPopular([...res.results]));
    },[popular]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=3cda0804d7e6fb92273c090b8e4e1f22&language=en-US&page=${upcomingPage}`) //upcoming
            .then(res => res.json())
            .then(res => setUpcoming([...res.results]));
    }, [upcoming]);

    const popularPageChange = (event, value) => {
        setPopularPage(value);
    }

    const upcomingPageChange = (event, value) => {
        setUpcomingPage(value);
    }

    return (
        <Fragment>
            <ListCard>
                <div className='listSection'>
                    <div className='listName'>

                        <h2>Latest Movies</h2>
                    </div>
                    <div className='pagination'>
                        <Pagination count={10} color="primary" page={upcomingPage} onChange={upcomingPageChange}/>
                    </div>
                    <MovieList movies={upcoming} page={upcomingPage}></MovieList>
                </div>
                <div className='listSection'>
                    <div className='listName'>
                        <h2>Trending Movies</h2>
                    </div>
                    <div className='pagination'>
                        <Pagination count={10} color="primary" page={popularPage} onChange={popularPageChange}/>
                    </div>
                    <MovieList movies={popular} page={popularPage}></MovieList>
                </div>
            </ListCard>
        </Fragment>
    )
}

export default MoviePage;