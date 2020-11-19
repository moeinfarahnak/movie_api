import React from 'react';
import MovieItem from './MovieItem';
import Spinner from './Spinner';
import './Movies.css';

const Movies = (props) => {
        if(props.loading) {
            return <Spinner />
        } else{
            return (
                <div id='movies'>
                    {props.movies.map(movie => {
                        return <MovieItem info={movie} key={movie.imdbID}/>
                    })}
                </div>
            )
        }
}

export default Movies
