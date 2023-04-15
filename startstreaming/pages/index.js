
import { Fragment } from 'react';
import MoviePage from './movie';
import Header from '@/components/Header';

import Movie from '../components/MovieList';
// @refresh reset 

function HomePage(props) {


    return (
        <Fragment>
            <Header></Header>
            <MoviePage></MoviePage>
        </Fragment>
    )
}

export default HomePage;