
import { Fragment } from 'react';
import MoviePage from './movie';
import Header from '@/components/Header';

function HomePage(props) {


    return (
        <Fragment>
            <Header></Header>
            <MoviePage></MoviePage>
        </Fragment>
    )
}

export default HomePage;